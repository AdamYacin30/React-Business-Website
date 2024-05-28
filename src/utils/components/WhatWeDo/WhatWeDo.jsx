'use client'

import React from 'react'
import './WhatWeDo.css'
import { features } from '../../data';
import Image from "next/image";
import {motion} from 'framer-motion'
import { tagVaraints } from '../../animations';
import { titleVaraints } from '../../animations';
import { desVaraints } from '../../animations';
import { containerVariants } from '../../animations';

const WhatWeDo = () => {
    return (
        <div className="wwd-wrapper">
            <div className="container">
                <div className="wwd-container">
                    
                    {/* head of section */}
                    <div className="wwd-head">
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVaraints}
                        className='title'>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVaraints}
                        className='tag'>What we do</motion.span>
                            <br/>
                            Amplify companies through strategic social media campaigns, captivating content creation, and innovative digital 
                            solutions
                            </motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVaraints}
                        className='des'>Here is what we do</motion.span>
                    </div>

                    {/*support blocks */}
                    <motion.div 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={containerVariants(0,3)}
                    className="wwd-support">
                        {/*left side */}
                        <div>
                            <span className='sec-title'>Search Engine Optimization</span>
                            <span className='text'>Book a meeting today if you are looking to scale your business!</span>
                        </div>

                    {/*right side */}
                    {/*<span className='text'>
                        Actionable data insights by connecting revenue, marketing and social media platforms                                
                                </span>*/} 
                    <span className='des'>
                        Wallstopia has deep expertise in partnering with companies in the [niche] industry. We are known for 
                        our proven methods that take turn your social media into a predictable revenue source that help our clients businesses.
                    </span>
                    </motion.div>

                    {/*2 blocks */}
                    <div className="wwd-blocks">
                        
                        {/* first block */}
                        <div className="wwd-block">
                            <motion.span 
                            variants={titleVaraints}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='sec-title'>social media Marketing</motion.span>
                            <motion.span 
                             variants={desVaraints}
                             initial="offscreen"
                             whileInView={"onscreen"}
                            className='text'>Boost brands through social media marketing expertise and engaging content</motion.span>
                            <span>

                                <div className="block-features">
                                    {features.slice(0,3).map((feature, i)=> (
                                            <motion.div 
                                            initial="offscreen"
                                            whileInView={"onscreen"}
                                            variants={containerVariants((i+1) * 0.1)}
                                            className='block-feature' key={i}>
                                                <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                                <span>{feature.title}</span>
                                            </motion.div>

                                        ))

                                    }
                                    
                                </div>
                            </span>
                        </div>

                        {/*second block */}
                        <div className="wwd-block">
                        <motion.span 
                        variants={titleVaraints}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>Search Engine Optimizatation</motion.span>
                            <motion.span 
                            variants={desVaraints}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='text'>optimize online visibility and drive traffic through strategic SEO tactics to boost digital engagement</motion.span>
                            <span>

                                <div className="block-features">
                                    {features.slice(3,6).map((feature, i)=> (
                                            <motion.div 
                                            initial="offscreen"
                                            whileInView={"onscreen"}
                                            variants={containerVariants((i+1) * 0.1)}
                                            className='block-feature' key={i}>
                                                <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                                <span>{feature.title}</span>
                                            </motion.div>

                                        ))

                                    }
                                    
                                </div>
                            </span>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
        );
};

export default WhatWeDo