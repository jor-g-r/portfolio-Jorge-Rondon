// Language detection for first visits to "/". Pure function so it can be tested on its own.
// Order: the browser's Accept-Language wins; the visitor's country is only a fallback
// for requests that state no language at all (some bots, privacy tools).

export type SiteLang = "en" | "es";

export const LANG_COOKIE = "lang";

// Countries where Spanish is the main language.
const SPANISH_COUNTRIES = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "ES", "GQ", "GT",
  "HN", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE",
]);

/** Parses "es-CO,es;q=0.9,en;q=0.8" into tags sorted by weight, highest first. */
export function parseAcceptLanguage(header: string): { tag: string; q: number }[] {
  return header
    .split(",")
    .map((part, index) => {
      const [rawTag, ...params] = part.trim().split(";");
      const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const q = qParam ? Number(qParam.slice(2)) : 1;
      return { tag: rawTag.trim().toLowerCase(), q, index };
    })
    .filter((l) => l.tag && l.tag !== "*" && Number.isFinite(l.q) && l.q > 0)
    // Stable: equal weights keep the browser's order.
    .sort((a, b) => b.q - a.q || a.index - b.index)
    .map(({ tag, q }) => ({ tag, q }));
}

export function preferredLang(
  acceptLanguage: string | null,
  country: string | null,
): SiteLang {
  const langs = acceptLanguage ? parseAcceptLanguage(acceptLanguage) : [];
  if (langs.length > 0) {
    // First of Spanish or English in the visitor's order; anything else reads English.
    for (const { tag } of langs) {
      const base = tag.split("-")[0];
      if (base === "es") return "es";
      if (base === "en") return "en";
    }
    return "en";
  }
  return country && SPANISH_COUNTRIES.has(country.toUpperCase()) ? "es" : "en";
}
