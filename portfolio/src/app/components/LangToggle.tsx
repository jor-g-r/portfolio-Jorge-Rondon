"use client";
import { LANG_COOKIE, type SiteLang } from "@/lib/lang";

const OPTIONS: { lang: SiteLang; href: string; label: string; title: string }[] = [
  { lang: "en", href: "/", label: "EN", title: "Read in English" },
  { lang: "es", href: "/es", label: "ES", title: "Leer en español" },
];

// Remember the choice for a year so detection on "/" never overrides it.
function remember(lang: SiteLang) {
  document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

export default function LangToggle({ current, label }: { current: SiteLang; label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-sm border border-dark-400 overflow-hidden text-sm tracking-widest condensed"
    >
      {OPTIONS.map((o) => {
        const active = o.lang === current;
        return (
          // Plain <a>: each language is its own root layout, so this is a full page load.
          <a
            key={o.lang}
            href={o.href}
            hrefLang={o.lang}
            lang={o.lang}
            title={o.title}
            aria-current={active ? "page" : undefined}
            onClick={() => remember(o.lang)}
            className={`px-2.5 py-1 duration-300 ease-in ${
              active ? "bg-white-100 text-dark-600" : "text-white-100 hover:bg-dark-600"
            }`}
          >
            {o.label}
          </a>
        );
      })}
    </div>
  );
}
