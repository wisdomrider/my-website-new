import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../main.css";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const { push } = useRouter();

  return (
    <div className="root">
      {/* <div className="traveler">
            <div className="block"></div>
        </div> */}

      <title>Avishek || Wisdomrider</title>
      <LeftBar />
      <div className="container">
        <div
          style={{ background: "rgb(194, 191, 191, 0.3)" }}
          className="card rounded-lg"
        >
          <ul className="flex justify-center">
            <li onClick={() => push("/")} className="p-1 mr-2 item">
              Home
            </li>
            <li onClick={() => push("/posts")} className="p-1 ml-2 item">
              Posts
            </li>
            <li className="p-1 ml-2 item">Download CV</li>
          </ul>
        </div>
        <Component {...pageProps} />
      </div>
      <div className="rightbar">
        <RightBar pageProps={pageProps} />
      </div>
    </div>
  );
}
