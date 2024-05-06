import "./globals.css";
import { Roboto, Roboto_Condensed } from "next/font/google";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${roboto_condensed.variable} bg-[#121212]`}
    >
      <head>
        <title>Frontend Developer Jorge Rondón</title>
        <meta
          name="description"
          content="Frontend Developer with a portfolio filled with exciting web projects. My portfolio showcases my expertise in modern technologies like Next.js, Tailwind CSS, and the powerful Framer Motion."
        ></meta>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-K7VKR3M6`}
          strategy="lazyOnload"
        />
      </head>
      <body className={`${roboto.className} `}>
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
