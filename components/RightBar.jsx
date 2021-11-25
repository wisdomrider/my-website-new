import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
const types = ['Projects for Sale', 'Android Apps By Me', 'Facebook Page']
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import { FaTimesCircle } from 'react-icons/fa';
export default function RightBar({ pageProps }) {
    const [sliderItem, setSliderItem] = React.useState(0);

    return (
        <div style={{ width: 240 }}>
            <div className="flex flex-jc">
                <h3 style={{ marginBottom: 7 }}>&nbsp;&nbsp;{types[sliderItem]} </h3>

            </div>
            <hr />

            <Carousel
                interval={10000}
                onChange={(i) => setSliderItem(i)}
                renderIndicator={(handler, isSelected, index, label) => (

                    <div className="flex flex-row">
                        {isSelected ? <FaTimesCircle /> : <Skeleton width={30} height={30} />}
                    </div>

                )}
                showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} >
                <div>


                </div>
                <div style={{ overflow: 'scroll', overflowX: 'hidden' }}>
                    {pageProps.appList ? pageProps.appList.map(item => <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={() => window.open(item.appLink, '_blank')} class="flex app-card flex-ac">
                        <img className="avatar" style={{ width: 25, height: 25 }} src={item.appIcon} />
                        &nbsp;&nbsp;
                        <p>{item.appName}</p>

                    </motion.div>) : < Skeleton count={22} />}
                </div>
                <div>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwisdomriderr&tabs=timeline&width=238&height=1024&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1945437778856174" width="238" height="500" style={{ border: 'none', width: 238, marginLeft: 0, marginTop: 10 }} scrolling="no" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                </div>
            </Carousel>



        </div>
    )
}

