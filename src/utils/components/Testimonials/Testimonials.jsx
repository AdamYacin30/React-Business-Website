import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'
const Testimonials = () => {
    return (
        <div className="t-wrapper">
            <div className="container">
                <div className="t-container">
                    <div className="t-head">
                        <span className='tag'>Testimonials</span>
                        <span className='title'>Leverage Social Media for Innovative Financial Growth Opportunities</span>
                        <span className="des">What Business owners say about us</span>
                    </div>

                </div>
                {/* slider */}
                <SlickSlider/>
            </div>
        </div>
    )
}

export default Testimonials