import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
