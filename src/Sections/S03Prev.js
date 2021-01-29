import Heading from 'components/Heading';
import React, { Component } from 'react';
import Section from '../components/Section';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';


//import SLC from 'images/SLC.svg'

import SLC from 'images/backgrounds/SLC/SLC_NO_BACK.svg'
import SLC_BACK from 'images/backgrounds/SLC/SLC_BACK.svg'
import Stats from 'images/statistics.svg'

export default class S03Prev extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id='colorPrevBack' className='colorPrevBack'/>;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (
            <div className='bannerBack'>
                <Parallax className="SLC" y={[0, 5]} tagOuter="figure">
                    <Fade>
                        <img src={SLC} alt='Ryerson Student Learning center'/>
                    </Fade>
                </Parallax>
                <Parallax className="SLC-BACK" y={[-15, 10]} tagOuter='figure'>
                    <img src={SLC_BACK} alt='SLC BACKGROUND' />
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
                <Heading headingText='In Previous Years' />
                {/* <img className='statistics' src={Stats} alt='Previous year statistics'/> */}
            </Section>
        );
    }
}
