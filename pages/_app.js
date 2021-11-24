import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import '../main.css'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MyApp({ Component, pageProps }) {
    return <div style={{ display: 'flex', height: '95vh' }}>
        <title>Avishek || Wisdomrider</title>
        <LeftBar />
        <div className="container">
            <Component  {...pageProps} />
        </div>
        <div className="rightbar" >
            <RightBar />

        </div>
    </div>
}