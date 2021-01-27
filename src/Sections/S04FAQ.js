import Heading from 'components/Heading';
import React, { Component } from 'react';
import Section from '../components/Section';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';
import { Typography } from '@material-ui/core'


import ROM from 'images/backgrounds/ROM/ROM.svg'

export default class S04FAQ extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id='colorFAQBack' className='colorFAQBack'/>;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (
            <div className='bannerBack'>
                <Parallax className="ROM" y={[-5, 5]} tagOuter="figure">
                    <Fade>
                        <img src={ROM} alt='Ryerson Student Learning center'/>
                    </Fade>
                </Parallax>
            </div>
        );
    }
    render() {
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
            >
                <Heading headingText='Frequently Asked Questions' />
                <div className='faq-container-info'>
                    <div className = "section-info">
                        <Typography variant="h4">Who can Attend?</Typography>
                        <Typography variant="body1" className="answer">If you are a student enrolled in any undergraduate or graduate program and are 18 or older, you are eligible to apply and attend RU Hacks.</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">How will I get to RU Hacks?</Typography>
                        <Typography variant="body1" className="answer">This year RU Hacks will be doing a virtual hacakthon due to recent COVID-19 events. We will let you know soon on how to register!</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">How much does it cost to attend RU Hacks?</Typography>
                        <Typography variant="body1" className="answer">Admission to RU Hacks is completely free!</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">I’ve never attended a hackathon before...</Typography>
                        <Typography variant="body1" className="answer">No worries. Prior coding or technical experience is not a requirement at all. RU Hacks is a fun learning experience. We’ll be having tons of beginner workshops, talks and as well as mentors to help you with your projects. Our goal is for you to leave RU Hacks having learned something.</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">Can I start working on my hack before the event?</Typography>
                        <Typography variant="body1" className="answer">No. We do not allow participants to work on pre-existing projects. All projects must be worked on from scratch. You'll have enough time to make something you can be proud of. However, you are welcome to familiarize yourself with specific tools and technologies beforehand!</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">What about Hardware Hacks?</Typography>
                        <Typography variant="body1" className="answer">If you have any specific hardware you intend to work with, feel free to use them.</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">What is the maximum team size?</Typography>
                        <Typography variant="body1" className="answer">A team can be a person working on their own, however, the largest team allowed will be a team of 4.</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">How does judging work?</Typography>
                        <Typography variant="body1" className="answer">Our panel of judges consists of some of the biggest names in tech. These experts will eagerly be viewing your projects based on usefulness, design, difficulty and creativity. The top projects will get a chance to demo their hacks in front of all of RU Hacks during the closing ceremony.</Typography>
                    </div>
                    <div className = "section-info">
                        <Typography variant="h4">I still have more questions!</Typography>
                        <Typography variant="body1" className="answer">Reach out to us at <a href = "mailto:communications@ruhacks.com" target = "_blank" rel="noopener">communications@ruhacks.com</a></Typography>
                    </div>
                </div>
            </Section>
        );
    }
}
