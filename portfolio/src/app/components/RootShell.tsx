// The <html> shell shared by the English and Spanish root layouts.
// Each language is its own root layout (route groups), so <html lang> is static and correct.
import "../globals.css";
import { Roboto, Roboto_Condensed } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Lang } from "@/content/types";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["100", "400", "500"],
});
const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
  weight: ["400", "700"],
});

export default function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${roboto.variable} ${roboto_condensed.variable} bg-[#101010]`}
      suppressHydrationWarning
    >
      <head>
        <GoogleTagManager gtmId="GTM-K7VKR3M6" />
      </head>
      <body className={`${roboto.className}`} suppressHydrationWarning>
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7VKR3M6"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
          }}
        />
      </body>
    </html>
  );
}
