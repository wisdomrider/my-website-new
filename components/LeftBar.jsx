import { motion } from 'framer-motion'
import React from 'react'

export default function leftbar() {
    return (
        <div className="leftbar flex flex-col flex-ac">

            <motion.img whileInView={{
                boxShadow: "0px 0px 5px #000",
            }}  whileHover={{scale: 1.2}} style={{ marginTop: 5 }} className="avatar" src="https://avatars.githubusercontent.com/u/34032131?v=4" />
        </div>
    )
}
