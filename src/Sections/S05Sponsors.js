import React, { Component } from "react";
import Section from "../components/Section";
import Heading from 'components/Heading';

import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

import AGO from 'images/backgrounds/AGO/AGO.svg'


export default class S05Sponsors extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id='colorSponsorsBack' className='colorSponsorsBack'/>;    
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (<div className='bannerBack'>
        <Parallax className="AGO" y={[-5, 5]} tagOuter="figure">
            <Fade>
                <img src={AGO} alt='Ryerson Student Learning center'/>
            </Fade>
        </Parallax>
    </div>);
    }
    render() {
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
            >
                <Heading headingText='Sponsors' />
            </Section>
        );
    }
}
