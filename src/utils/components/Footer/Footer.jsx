import React from 'react'
import EmailBox from '../EmailBox/EmailBox'
import './Footer.css' 

const Footer = () => {
    
    return (
        <div className="f-wrapper">
            <div className="container">
                <div className="f-container">
                    <span className="title">Get Started Today!</span>
                    <EmailBox/>
                    

            
                      {/* Schedule Meeting Button */}
                      <a href="https://calendly.com/adam-gyassine/media-marketing-conslutation" className="schedule-meeting-button">
                        Schedule a Meeting
                    </a>
                    <hr/>
                    <div className="f-menu">
                        <span>Home</span>
                        <span>About us</span>
                        <span>Services</span>
                        <span>Who we help</span>
                        <span>Testimonials</span>
                    </div>   

                    <hr/>  

                    <span className="text">Made By Adam Yassine</span>         
                </div>
            </div>
        </div>
    )
}

export default Footer