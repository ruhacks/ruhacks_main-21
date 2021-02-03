import React, { Component } from "react";
import Section from "../components/Section";
import { Parallax } from 'react-scroll-parallax';
import DSQ from 'images/backgrounds/DSQ/DSQ_NO_LINET.svg'

import RuLogoRGB from '../images/RU_RGB.svg'
import EggwardSitting from 'images/eggward/sit2.png';


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
            <img className="DSQ" src={DSQ} alt='Dundas Square'/>
        </div>
        );
    }

    renderIntro = () => {
        return (
            <div className="intro-con " id="bannerTitle">
                <img className="intro-img" src={EggwardSitting} alt='Eggy'></img>
                <div className="intro-text">
                    <div className="intro-hackathon">RU Hacks 2021</div>
                    <div className="intro-slogan">Digitally Together!</div>
                    <div className="intro-signup"> {">"} signup</div>
                    <div className="intro-socials"> {">"} socials</div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
                className='banner'
            >
                {this.renderIntro()}
            </Section>
        );
    }
}
