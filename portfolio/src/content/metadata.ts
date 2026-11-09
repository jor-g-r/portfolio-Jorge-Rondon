import type { Metadata } from "next";
import type { Content } from "./types";
import { SITE_URL } from "./shared";

// Canonical + hreflang so search engines serve each language to the right people.
export function buildMetadata(c: Content): Metadata {
  const path = c.lang === "en" ? "/" : "/es";
  return {
    metadataBase: new URL(SITE_URL),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: path,
      languages: { en: "/", es: "/es", "x-default": "/" },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: path,
      siteName: "Jorge Rondón",
      locale: c.lang === "en" ? "en_US" : "es_CO",
      type: "website",
    },
  };
}
