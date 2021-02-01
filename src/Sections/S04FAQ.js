import Heading from 'components/Heading';
import React, { Component } from 'react';
import Section from '../components/Section';
import InfoBox from 'components/InfoBox';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';

import { infoBoxTitles, infoBoxDescription } from 'config/Text'

import ROM from 'images/backgrounds/ROM/ROM.svg'
import ROM_BACK from 'images/backgrounds/ROM/ROM_BACK.svg'

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
                <Parallax className="ROM-BACK" y={[-15, 10]} tagOuter='figure'>
                    <img src={ROM_BACK} alt='SLC BACKGROUND' />
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
                <Heading headingText='Frequently Asked Questions' old={true}/>
                <div className='faq-container-info'>
                    <InfoBox infoTitle = {infoBoxTitles.FAQ.whoCanAttend} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.whoCanAttend} textVariant = "h6" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.howWillIGet} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.howWillIGet} textVariant = "h6" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.cost} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.cost} textVariant = "h6" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.firstTime} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.firstTime} textVariant = "body1" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.workBeforeEvent} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.workBeforeEvent} textVariant = "body1" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.hardware} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.hardware} textVariant = "h6" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.maxTeam} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.maxTeam} textVariant = "h6" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.judging} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.judging} textVariant = "h6" permanentOpen = {true}/>
                    <InfoBox infoTitle={infoBoxTitles.FAQ.more} titleVariant = "h5" infoText = {infoBoxDescription.FAQAnswers.more} textVariant = "h6" permanentOpen = {true}/>
                </div>
            </Section>
        );
    }
}
