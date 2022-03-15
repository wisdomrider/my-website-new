import React from "react";
import { Carousel } from "react-responsive-carousel";
const types = ["Projects for Sale", "Android Apps By Me", "Facebook Page"];
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
export default function RightBar({ pageProps }) {
  const [sliderItem, setSliderItem] = React.useState(0);

  return (
    <Box display={["none", "block"]} style={{ width: 240 }}>
      <div className="flex flex-jc">
        <h3 style={{ marginBottom: 7 }}>&nbsp;&nbsp;{types[sliderItem]} </h3>
      </div>
      <hr />

      <Carousel
        interval={10000}
        onChange={(i) => setSliderItem(i)}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ overflow: "scroll", overflowX: "hidden" }}
        >
          <div style={{ borderRadius: 5 }} className="card">
            <b>E-Commerce Site/App</b>
            <div className="price">
              <s>
                <small>$380</small>
              </s>
              &nbsp;&nbsp;$350
            </div>
            <div className="desc">
              <p>
                Fully fledged e-commerce site/app for a local business which can
                boost your sales and increase your revenue.
              </p>
            </div>
            <hr />
            <div style={{ marginTop: 5, marginBottom: 5 }}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => window.open("https://shop.wisd.xyz")}
                style={{ marginRight: 10 }}
                className="btn btn-primary"
              >
                View Demo
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="btn btn-secondary"
                onClick={() => window.open("https://m.me/wisdomrider")}
              >
                Buy Now
              </motion.button>
            </div>
          </div>
          <div style={{ borderRadius: 5 }} className="card">
            <b>Online Accounting Application/ Multi Company</b>
            <div className="price">
              <s>
                <small>$3000</small>
              </s>
              &nbsp;&nbsp;$2999
            </div>
            <div className="desc">
              <p>
                Fully fledged accounting application which can be used my more
                than one company/multi platform with domain.
              </p>
            </div>
            <hr />
            <div style={{ marginTop: 5, marginBottom: 5 }}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => window.open("https://khatawala.com")}
                style={{ marginRight: 10 }}
                className="btn btn-primary"
              >
                View Demo
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="btn btn-secondary"
                onClick={() => window.open("https://m.me/wisdomrider")}
              >
                Buy Now
              </motion.button>
            </div>
          </div>
        </motion.div>
        {pageProps.appList && (
          <div style={{ overflow: "scroll", overflowX: "hidden" }}>
            {pageProps.appList.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => window.open(item.appLink, "_blank")}
                className="flex app-card flex-ac"
              >
                <img
                  className="avatar"
                  style={{ width: 25, height: 25 }}
                  src={item.appIcon}
                />
                &nbsp;&nbsp;
                <p>{item.appName}</p>
              </motion.div>
            ))}
          </div>
        )}
        <div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwisdomriderr&tabs=timeline&width=238&height=1024&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1945437778856174"
            width="238"
            height="500"
            style={{ border: "none", width: 238, marginLeft: 0, marginTop: 10 }}
            scrolling="no"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </Carousel>
    </Box>
  );
}
