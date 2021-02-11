import React, { Component } from "react";
import Section from "../components/Section";
import DSQ from 'images/backgrounds/DSQ/DSQ_IMGS.svg'

import EggwardSitting from 'images/eggward/sit.png';
import cloud from 'images/cloud.png'
import cloud2 from 'images/cloud2.png'
import cloud3 from 'images/cloud3.png'
import cloud4 from 'images/cloud4.png'



import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import axios from "axios";

const API_URL = 'http://localhost:5000/signup'

export default class S01Intro extends Component {

    constructor(props){
        super(props)

        this.state ={
            newsletterModal: false,
            email: '',
            name: '',
            successText: '',
            failText: '',
            signedUp: false,
            submitted: false,
            newsletterErr: false,
            progress: false,
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.setCloseMode = this.setCloseMode.bind(this)
        this.setOpenMode = this.setOpenMode.bind(this)
        this.handleNewsletterSignup = this.handleNewsletterSignup.bind(this)
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
        let formData = {};
        const { email, name } = this.state
        formData['EMAIL'] = email
        formData['NAME'] = name
        this.setState({
            submitted: true,
            progress: true,
        })
        axios.post(API_URL, {formData})
        .then(response => {
            let responseTxt= ''
            if(response.data.added_subscription){
                responseTxt= 'You have been sucessfully signed up!'
            }else if(response.data.already_subscribed){
                responseTxt = 'Looks like we already got you!'
            }
            this.setState({
                signedUp: true,
                submitted: true,
                progress: false,
                newsletterErr: false,
                successText: responseTxt,
            })
        })
        .catch(error => {
            this.setState({
                signedUp: false,
                submitted: true,
                progress: false,
                newsletterErr: true,
                errorText: 'ERROR!'
            })
        })
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
                    <div className="intro-newsletter" onClick={this.setOpenMode}> {">"} signup for our newsletter!</div>
                    <div className="intro-newsletter" onClick={this.setOpenMode}> {">"} mentors Signup here!</div>

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
                    {(this.state.signedUp && !this.state.progress) && (
                        <p className='success'>
                            {this.state.successText}
                        </p>
                    )}
                    {(this.state.newsletterErr && !this.state.progress) && (
                        <p className='failure'>
                            {this.state.failText}
                        </p>
                    )}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="EMAIL"
                        name='EMAIL'
                        label="Email Address"
                        type="email"
                        onChange={this.handleEmailChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="NAME"
                        name='NAME'
                        label="Name"
                        onChange={this.handleNameChange}
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
                    {(this.state.progress) && (
                        <CircularProgress />
                    )}
                </DialogActions>
            </Dialog>
        )
    }

    render() {
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
