import React from 'react'
import './OurDiff.css'
import { ourDiffFeatures } from '../../data'
import Image from "next/image";
import {motion} from 'framer-motion'
import { tagVaraints } from '../../animations';
import { titleVaraints } from '../../animations';
import { desVaraints } from '../../animations';
import { containerVariants } from '../../animations';

const OurDiff = () => {
    return (
        <div className="od-wrapper">
            <div className="container">
                <div className="od-container">

                    {/*head */}
                    <div className="od-head">
                    <motion.span 
                    variants={tagVaraints}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='tag'>Our differences</motion.span>
                    <motion.span 
                    variants={titleVaraints}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='title'>fast, efficient, cost friendly</motion.span>
                    <motion.span 
                    variants={desVaraints}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='text'>here at Wallstopia we ensure that you will get the best value for your dollar</motion.span>
                    </div>

                    {/* Feature */}
                    <div className="od-features">
                        {
                            ourDiffFeatures.map((feature, i)=> (
                                <motion.div    
                                key={i} 
                                variants={containerVariants((i + 1) * 0.1)}
                                initial="offscreen"
                                whileInView="onscreen"
                                className='od-feature'>
                                    <Image 
                                    src={feature.icon} 
                                    alt="featueres" 
                                    width={128} 
                                    height={128}
                                    />
                                    <span className='sec-title'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>

                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDiff