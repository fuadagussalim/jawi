import { SpeedInsights } from "@vercel/speed-insights/next";
import { Html, Head, Main, NextScript } from "next/document";


import { Analytics } from "@vercel/analytics/react"
export default function Document() {
  return (
    <Html lang="en" >
      <Head>
            <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />
        <link rel="icon" href="/favicon.ico" sizes="any" /></Head>
      <body>
        {/* <SpeedInsights/> 
        <Analytics /> */}

        <Main/>


    
        <NextScript />

  
      </body>
    </Html>
  );
}
