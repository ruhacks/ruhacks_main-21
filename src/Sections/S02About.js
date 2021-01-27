import React, { Component } from "react";
import Section from "components/Section";
import Heading from 'components/Heading';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';
import { Typography } from '@material-ui/core'


import CN from 'images/backgrounds/CN/CN_NO_BACK.svg'
import CN_BACK from 'images/backgrounds/CN/CN_BACK.svg'

export default class S02About extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id='colorRulesBack' className='colorRulesBack'/>;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (
                <div className='bannerBack'>
                    <Parallax className="CN" y={[-5, 5]} tagOuter="figure">
                        <Fade>
                            <img src={CN} alt='CN Tower'/>
                        </Fade>
                    </Parallax>
                    <Parallax className="CN-BACK" y={[-5, 5]} tagOuter="figure">
                        <Fade>
                            <img src={CN_BACK} alt='CN Tower'/>
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
                <Fade top>
                    <Heading headingText='About RU Hacks' old={true}/>
                </Fade>
                <div className='rules-container-info'>
                    <div className='section-info rules-info'>
                        <Typography variant="h3">What is RU Hacks?</Typography>
                        <hr />
                        <Typography variant="body1">RU Hacks is a unique hackathon at Ryerson University, located at the heart of downtown Toronto. This year will be our fourth RU Hacks and we hope you will be here to join us for 36 hours of creativity. Meet new people, learn new skills and have fun while showcasing your talents.</Typography>
                    </div>
                    <div className='section-info rules-info'>
                        <Typography variant="h3">Why Attend?</Typography>
                        <hr />
                        <Typography variant="body1">Be a part of something special - meet other passionate students and let your creativity run wild. This event is the perfect opportunity to showcase your talents. This event is also an opportunity to learn new skills as mentors will be present, and there will be plenty of workshops to help you get your ideas off the ground.</Typography>
                    </div>
                </div>
            </Section>
        );
    }
}
