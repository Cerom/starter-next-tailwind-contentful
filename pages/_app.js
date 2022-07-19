import "../styles/globals.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import { ContextProvider } from "../utils/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ContextProvider>
  );
}

export default MyApp;
