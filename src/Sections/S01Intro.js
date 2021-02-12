import React, { Component } from "react";
import Section from "../components/Section";
import DSQ from 'images/backgrounds/DSQ/DSQ_IMGS.svg';

import EggwardSitting from 'images/eggward/sit.png';
import cloud from 'images/cloud.png';
import cloud2 from 'images/cloud2.png';
import cloud3 from 'images/cloud3.png';
import cloud4 from 'images/cloud4.png';

import SignupModal from 'components/SignupModal';

export default class S01Intro extends Component {

    constructor(props){
        super(props)

        this.state = {
            toggleModal: false
        }
        this.toggleOpenModal = this.toggleOpenModal.bind(this)
    }

    toggleOpenModal = () =>{
        this.setState({
            toggleModal: !this.state.toggleModal
        })
    }

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
            <img className="DSQ " src={DSQ} alt='Dundas Square'/>
            <img className="cloud cloud-left" src={cloud} alt='Cloud'/>
            <img className="cloud cloud-left" src={cloud2} alt='Cloud'/>
            <img className="cloud cloud-left" src={cloud3} alt='Cloud'/>
            <img className="cloud cloud-left" src={cloud4} alt='Cloud'/>
            <img className="cloud cloud-left" src={cloud} alt='Cloud'/>
            <img className="cloud cloud-right" src={cloud4} alt='Cloud'/>
            <img className="cloud cloud-right" src={cloud2} alt='Cloud'/>
            <img className="cloud cloud-right" src={cloud3} alt='Cloud'/>
            <img className="cloud cloud-right" src={cloud} alt='Cloud'/>
        </div>
        );
    }

    renderIntro = () => {
        return (
            <div className="intro-con fade-in" id="bannerTitle">
                <img className="intro-img" src={EggwardSitting} alt='Eggy'></img>
                <div className="intro-text">
                    <div className="intro-hackathon">RU Hacks 2021</div>
                    <div className="intro-slogan">Digitally Together!</div>
                    <div className="intro-newsletter" onClick={this.toggleOpenModal}> {">"} signup for our newsletter!</div>
                </div>
            </div>
        );
    };

    render() {
        const { toggleModal } = this.state
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
                className='banner'
            >
                {this.renderIntro()}
                <SignupModal open={toggleModal}/>
            </Section>
        );
    }
}
