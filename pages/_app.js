import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import '../main.css'
import 'react-loading-skeleton/dist/skeleton.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
   
    return <div className="root" >
        <title>Avishek || Wisdomrider</title>
        <LeftBar />
        <div className="container">
            <Component  {...pageProps} />
        </div>
        <div className="rightbar" >
            <RightBar pageProps={pageProps} />

        </div>
    </div>
}

