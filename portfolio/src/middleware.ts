import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE, preferredLang } from "./lib/lang";

// Runs only on "/". It never moves anyone away from "/es", and an explicit
// choice made with the language toggle (cookie) always wins over detection.
export function middleware(req: NextRequest) {
  const chosen = req.cookies.get(LANG_COOKIE)?.value;
  const lang =
    chosen === "en" || chosen === "es"
      ? chosen
      : preferredLang(
          req.headers.get("accept-language"),
          req.headers.get("x-vercel-ip-country"),
        );

  if (lang === "es") {
    const url = req.nextUrl.clone();
    url.pathname = "/es";
    // 307: temporary. A permanent redirect would get cached and stick
    // the visitor (and search engines) to one language.
    return NextResponse.redirect(url, 307);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/"] };
