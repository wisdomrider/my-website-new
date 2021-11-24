import { motion } from 'framer-motion'
import React from 'react'

export default function RightBar() {
    return (
        <div style={{ width: 240 }}>
            <div className="flex flex-jc" >
                <motion.b whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut"
                    }
                }} style={{ textAlign: 'center', background: 'gray', borderRadius: 15, padding: 8, color: '#fff' }}>Hire me</motion.b>
                
            </div>
        </div>
    )
}
