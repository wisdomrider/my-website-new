import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../main.css'

export default function MyApp({ Component, pageProps }) {

    return <div className="root" >
        <div className="traveler">
            <div className="block"></div>
        </div>

        <title>Avishek || Wisdomrider</title>
        <LeftBar />
        <div className="container">
            {/* <div className='menu'>
                <li>Blogs</li>
                <li>About Me</li>
                <li>Contact</li>
            </div>
 */}
            <Component  {...pageProps} />
        </div>
        <div className="rightbar" >
            <RightBar pageProps={pageProps} />

        </div>
    </div>

}

