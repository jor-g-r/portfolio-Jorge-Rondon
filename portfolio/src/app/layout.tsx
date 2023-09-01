"use client"; 
import './globals.css'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import Script from 'next/script'
import { useState, useEffect } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '400', '500']
})
const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
  weight: ['400', '700']
})



export default function RootLayout({children,}: {children: React.ReactNode}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <html lang="en" className={`${roboto.variable} ${roboto_condensed.variable} bg-neutral-900`}>
        
      <head>
      <title>Frontend Developer Jorge Rondón</title>
      <meta name="description" content="rontend Developer with a portfolio filled with exciting web projects. My portfolio showcases my expertise in modern technologies like Next.js, Tailwind CSS, and the powerful Framer Motion."></meta>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=G-FKPTBY45WN`}
          strategy="lazyOnload"
        />

          {loaded && (
          <Script
            id="google-tag-manager"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','G-FKPTBY45WN');
              `,
            }}
          />
        )}
      </head>
      <body className={`${roboto.className} `}>
      <noscript>
          {`
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=G-FKPTBY45WN"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          `}

        </noscript>
        
        
        
        {children}</body>


    </html>
  )
}
