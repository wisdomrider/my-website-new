import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../main.css";
import { ChakraProvider } from "@chakra-ui/react";
import TopBar from "../components/TopBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TopBar />
      <div className="root">
        <title>Avishek || Wisdomrider</title>

        <LeftBar />
        <div className="container">
          <Component {...pageProps} />
        </div>
        <div className="rightbar">
          <RightBar pageProps={pageProps} />
        </div>
      </div>
    </ChakraProvider>
  );
}
