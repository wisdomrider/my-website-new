import React from 'react'
import { Carousel } from 'react-responsive-carousel';
const types = ['Hire Me', 'Facebook Page']
export default function RightBar() {
    const [sliderItem, setSliderItem] = React.useState(0);

    return (
        <div style={{ width: 240 }}>
            <h3>&nbsp;&nbsp;{types[sliderItem]}</h3>
            <hr />

            <Carousel
                onChange={(i) => setSliderItem(i)}
                showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} >
                <div>
                    HIRE

                </div>
                <div>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwisdomriderr&tabs=timeline&width=238&height=1024&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1945437778856174" width="238" height="500" style={{ border: 'none', width: 238, marginLeft: 0, marginTop: 10 }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                </div>
            </Carousel>



        </div>
    )
}
