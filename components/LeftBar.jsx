import { motion } from 'framer-motion'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillGitlab, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillYoutube } from 'react-icons/ai'
import { ImStackoverflow } from 'react-icons/im'
import { FaEye, FaGooglePlay } from 'react-icons/fa'
import { DiNpm } from 'react-icons/di'
const items = {
    'https://fb.com/wisdomriderr': [<AiFillFacebook />, 'blue'],
    'https://play.google.com/store/apps/developer?id=Wisdomrider': [<FaGooglePlay />, '#11d0f8'],
    'https://github.com/wisdomrider': [<AiFillGithub />, 'black'],
    'https://www.npmjs.com/~wisdomrider': [<DiNpm />, '#c13534'],
    'https://www.instagram.com/wisdomriderwastaken': [<AiFillInstagram />, '#f08447'],
    'https://www.youtube.com/wisdomrider': [<AiFillYoutube />, 'red'],
    'https://stackoverflow.com/users/8386357/avishek-adhikari?tab=profile': [<ImStackoverflow />, '#e77c38'],
    'https://g.dev/wisdomrider': [<AiFillGoogleCircle />, 'red'],
    'https://gitlab.com/wisdomrider': [<AiFillGitlab />, '#d7412c'],
    'mailto:avishekzone@gmail.com': [<AiFillMail />, 'purple'],
    'https://www.linkedin.com/in/wisdomrider': [<AiFillLinkedin />, '#2562a9'],
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
                        return <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} key={index}>
                            <motion.a
                                onHoverStart={e => e.target.style.color = items[item][1]}
                                onHoverEnd={e => e.target.style.color = 'black'}
                                className="hover-red"
                                href={item} target={item.includes('http') ? '_new' : '_self'}>
                                {items[item][0]}
                            </motion.a>
                        </motion.div>
                    })
                }

            </div>
        </div>
    )
}
