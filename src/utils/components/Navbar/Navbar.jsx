"use client"

import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {Link} from "react-scroll";

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
        setNavStyle("sticky");
        } else {
        setNavStyle("");
        }
    });

    const emailAddress = 'adam.gyassine@gmail.com';

    const handleGetStartedClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
    <div className={`n-wrapper ${navStyle}`}>
    {/*desktop version*/}
    <div className="container">
    <div className="n-container">
        {/* left side*/}
        <div className="n-logo">
                    Wallstopia Marketing Agency
        </div>

        {/* right side*/}
        <div className="n-right">
            <div className="n-menu">
            <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>About us</span>
            </Link>
            <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
            </Link>
            <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in </span>
            </Link>
            <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
            </Link>
            </div>
            <div className="fund-button" onClick={handleGetStartedClick}>
                Get Started
            </div>
        </div>
    </div>
    </div>


    {/*mobile version*/}
    <div className="nm-container">
    {/*Logo*/}
    <div className="n-logo">
                    <img src="logo.png" alt="Logo" style={{ height: '50px' }} />
                </div>

    {/*menu icon*/}
    {
        !mobileMenuOpened ?
        <BiMenuAltRight size={30} onClick={()=>setMobileMenuOpened(true)}/>:
        <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        }

    {/*mobile menu*/}
    <div className="nm-menu" style={{transform: mobileMenuOpened && "translateX(0%)"}}
    >
        <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
            >
        <span>What we do</span>
        </Link>


        <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy
            smooth
            offset={100}
            >
        <span>Services</span>
        </Link>
      
        <Link 
            onClick={() => setMobileMenuOpened(false)} 
            to="wwi-wrapper" 
            spy 
            smooth
            >
            <span>Who we invest in </span>
        </Link>
        <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy
            smooth
            offset={100} >
            <span>Testimonials</span>
        </Link>

        <div className="m-funded-button" onClick={handleGetStartedClick}>Get Started</div>
    </div>
    </div>
    </div>
    )
    };
    export default Navbar