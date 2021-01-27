import React, { Component } from "react";
import Section from "../components/Section";
import { Parallax } from 'react-scroll-parallax';
import DSQ from 'images/backgrounds/DSQ/DSQ_NO_LINET.svg'

import RuLogoRGB from '../images/RU_RGB.svg'

import { Button, Typography } from '@material-ui/core'

export default class S01Intro extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return (
        <div id='colorBannerBack' className='colorBannerBack'/>
        );
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (
        <div className='bannerBack'>
            <Parallax className="DSQ" y={[-3, 1]} tagOuter="figure">
                <img src={DSQ} alt='Dundas Square'/>
            </Parallax>
        </div>
        );
    }
    render() {
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
                className='banner'
            >
                <div className='bannerTitle fade-in' id='bannerTitle'>
                    <img src={RuLogoRGB} className='mainLogo' alt='RU Hacks Logo'/>
                    <Typography id='mainTitle' variant="h1" component="h1">
                        RU HACKS
                    </Typography>
                    <Typography id='subTitle' variant="h3" component="h3">
                        Digitally Together!
                    </Typography>
                    <div className='bannerContent'>
                        <Button
                            type='button'
                            variant='contained'
                            color='primary'
                            className='upcoming'
                            onClick={() => console.log('clicked')}
                            
                        >
                            See our upcoming events!
                        </Button>
                    </div>
                </div>
            </Section>
        );
    }
}
