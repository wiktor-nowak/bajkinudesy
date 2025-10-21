import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-XPCJYD8VB3" />
      <GoogleTagManager gtmId="G-XPCJYD8VB3" />
    </>
  );
}
