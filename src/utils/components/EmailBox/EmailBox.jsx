import React from "react";
import './EmailBox.css'
import {LuMail} from 'react-icons/lu'
import {motion} from "framer-motion";
import {containerVariants} from "@/src/utils/animations";
const EmailBox = () => {
    const emailAddress = 'adam.gyassine@gmail.com';

    const handleGetStartedClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <motion.div 
        initial={{
            width: ".5rem",
            borderRadius: "100%"
        }}
        whileInView={{
            width: "70%",
            borderRadius: "999px",
            transition: {
                type: "easeOut",
                duration: 1,
            }
        }}
        className="emailBox">


        {/* icon */}
        <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
            once: true
        }}
        >
            <LuMail size={30} color="grey"/>
        </motion.div>


         {/* input */}
         <motion.input 
         variants={containerVariants(0.6)}
         initial="offscreen"
         whileInView={"onscreen"}
         viewport={{
             once: true
         }}
         type="email"
         placeholder="Enter Email"
         />  

          {/* get started buttone */}
          <motion.div 
          variants={containerVariants(0.6)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
              once: true
          }}
          className="getStarted"  onClick={handleGetStartedClick}>
                Get Started
          </motion.div>

        </motion.div>
    )

}
export default EmailBox