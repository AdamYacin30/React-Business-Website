import React from "react";
import './WhoWeHelp.css'
import { whoWeHelp } from '../../data';
import {motion} from 'framer-motion'
import { tagVaraints } from '../../animations';
import { titleVaraints } from '../../animations';
import { desVaraints } from '../../animations';
import { containerVariants } from '../../animations';

const WhoWeHelp = () => {
    return (
    
        <div className="wwi-wrapper">
            <div className="container">
                <div className="wwi-container">



                    {/* left side */}
                    <div className="wwi-left">
                        <div className="head">
                        <motion.span
                            variants={tagVaraints}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className="tag">
                            Who we partner with
                            </motion.span>
                            
                            <motion.span
                            variants={titleVaraints}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className="title">
                            Local and Global Businesses
                            <br /> with early online traction
                            </motion.span>
                        </div>

                        {/* features */}
                        <div className="wwi-features">
                            {
                              whoWeHelp.map((feature, i)=>(
                                <motion.div
                                    variants={containerVariants(i* 0.05 + 1)}
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    className="wwi-feature"
                                    key={i}>
                                    <span className="des">{feature.title}</span>
                                    <span className="text">{feature.des}</span>
                                </motion.div>
                              ))
                            }
                        </div>
                    </div>

                    {/* right side */}
                    <div className="wwi-right">
                    <motion.img
                        variants={containerVariants (0.5)}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        src="persons.png"
                        alt="persons"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeHelp