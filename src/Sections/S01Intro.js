import React, { Component } from "react";
import Section from "../components/Section";
import { Parallax } from 'react-scroll-parallax';
import DSQ from 'images/backgrounds/DSQ/DSQ_NO_LINET.svg'

import RuLogoRGB from '../images/RU_RGB.svg'
import EggwardSitting from 'images/eggward/sit2.png';
import cloud from 'images/cloud3.png'
import cloud2 from 'images/cloud2.png'


import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'

export default class S01Intro extends Component {

    constructor(props){
        super(props)

        this.state ={
            newsletterModal: false,
            email: '',
            name: '',
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.setCloseMode = this.setCloseMode.bind(this)
        this.setOpenMode = this.setOpenMode.bind(this)

    }

    handleEmailChange({target}){
        this.setState({
            email: target.value
        })
    }

    handleNameChange({target}){
        this.setState({
            name: target.value
        })
    }

    handleNewsletterSignup(){
        console.log('sign me up fam')
    }

    setCloseMode = () => {
        this.setState({
            newsletterModal: false
        })
    }

    setOpenMode(){
        this.setState({
            newsletterModal: true
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
                    <div className="intro-newsletter" onClick={this.setOpenMode}> {">"} signup for our newsletter!</div>
                    <div className="intro-socials"> {">"} socials</div>
                </div>
            </div>
        );
    };

    renderModalForSignup = () => {

        return(
            <Dialog 
                open={this.state.newsletterModal}
                onClose={this.setCloseMode}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Subscribe to our newsletter</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to our monthly newsletter, please enter your email address and name here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="EMAIL"
                        name='EMAIL'
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="NAME"
                        name='NAME'
                        label="Name"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.setCloseMode} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleNewsletterSignup} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    render() {
        console.log(this.state)
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
                className='banner'
            >
                {this.renderIntro()}
                {this.renderModalForSignup()}
            </Section>
        );
    }
}
