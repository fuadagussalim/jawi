import { SpeedInsights } from "@vercel/speed-insights/next";
import { Html, Head, Main, NextScript } from "next/document";
import {NextUIProvider} from "@nextui-org/react";


export default function Document() {
  return (
    <Html lang="en" >
      <Head><link rel="icon" href="/favicon.ico" sizes="any" /></Head>
      <body>
         

        <Main/>


    
        <NextScript />

  
      </body>
    </Html>
  );
}
