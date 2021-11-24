import { motion } from 'framer-motion'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillGitlab, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillYoutube } from 'react-icons/ai'
import {ImStackoverflow} from 'react-icons/im'
const items = {
    'https://fb.com/wisdomriderr': <AiFillFacebook />,
    'https://github.com/wisdomrider': <AiFillGithub />,
    'https://www.instagram.com/wisdomriderwastaken': <AiFillInstagram />,
    'https://www.youtube.com/wisdomrider': <AiFillYoutube />,
    'https://stackoverflow.com/users/8386357/avishek-adhikari?tab=profile': <ImStackoverflow />,
    'https://g.dev/wisdomrider':<AiFillGoogleCircle/>,
    'https://gitlab.com/wisdomrider':<AiFillGitlab/>,
    'mailto:avishekzone@gmail.com':<AiFillMail/>,
    'https://www.linkedin.com/in/wisdomrider':<AiFillLinkedin/>
}
export default function leftbar() {
    return (
        <div className="leftbar flex flex-col flex-ac" style={{ position: 'relative' }}>

            <motion.img whileInView={{
                boxShadow: "0px 0px 5px #000",
            }} whileHover={{ scale: 1.2 }} style={{ marginTop: 5 }} className="avatar" src="https://avatars.githubusercontent.com/u/34032131?v=4" />

            <div className="flex flex-col menus" >
                {
                    Object.keys(items).map((item, index) => {
                        return <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}  key={index}>
                            <a className="hover-red"  href={item} target={item.includes('http') ? '_new' : '_self'}>
                                {items[item] }
                            </a>
                        </motion.div>
                    })
                }

            </div>
        </div>
    )
}
