"use client"
import React from "react";
import './Hero.css'
import EmailBox from "../EmailBox/EmailBox";
import { HeroData } from "../../data";
import {motion} from 'framer-motion'
const Hero = () => {
    
    const variants = (delay) => ({
        initial : {
            y: "18rem"
        },
        animate : {
            y: "0rem",
            transition: {
                type: "spring",
                dmaping: 25,
                duration: 2.5,
                delay
            }
        }
    })
    
    const imgVariants = () => ({
        initial: {
            y: "18rem"
        },
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                duration: 2,
                stiffness: 30,
            },

        }
    })
    return (
    <div className="h-wrapper">
        <div className="container">

            <img src="hero/hero-arrow.png" alt="" className="h-arrow" />
            <div className="h-container">
                {/*left side*/}
                <div className="h-left">
                    <div className="image-row">
                        {
                            HeroData.slice(0,3).map((person, i)=> (
                               <div className="person-pill" key={i}>
                                    <motion.div 
                                    initial = {"initial"}
                                    animate = {"animate"}
                                    variants={variants(person.delay)}
                                    style={{backgroundColor: person.bg}}

                                    className="person-pill-bg">
                                        <motion.img 
                                        initial={"initial"}
                                        animate={"animate"}
                                        variants={imgVariants()}
                                        src={person.src} alt={person.src} />
                                    </motion.div>
                               </div> 
                            ))
                        }
                    </div>

                    <div className="image-row">
                        {
                          HeroData.slice(3,6).map((person, i)=> (
                            <div className="person-pill" key={i}>
                                 <motion.div 
                                 initial = {"initial"}
                                 animate = {"animate"}
                                 variants={variants(person.delay)}
                                 style={{backgroundColor: person.bg}}

                                 className="person-pill-bg">
                                     <motion.img  
                                      initial={"initial"}
                                      animate={"animate"}
                                      variants={imgVariants()}
                                     src={person.src} alt={person.src} />
                                 </motion.div>
                            </div> 
                         ))   
                        }
                    </div>

                </div>
                {/*right  side*/}
                <div className="h-right">

                <div className="h-title">
                        <span>Redefine How</span>
                        <span>You Grow Your</span>
                        <span>Business Online</span>
                </div>

                <div className="h-des">
                    Social Media Marketing Agency for all Businesses across the Globe
                </div>
                <EmailBox/>         
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero