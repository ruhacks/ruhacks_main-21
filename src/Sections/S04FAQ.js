import Heading from 'components/Heading';
import React, { Component } from 'react';
import Section from '../components/Section';
import InfoBox from 'components/InfoBox';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';

import { infoBoxTitles, infoBoxDescription } from 'config/Text'

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
                <Heading headingText='Frequently Asked Questions' old={true}/>
                <div className='faq-container-info'>
                    <InfoBox infoTitle = {infoBoxTitles.FAQ.whoCanAttend} infoText = {infoBoxDescription.FAQAnswers.whoCanAttend} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.howWillIGet} infoText = {infoBoxDescription.FAQAnswers.howWillIGet} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.cost} infoText = {infoBoxDescription.FAQAnswers.cost} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.firstTime} infoText = {infoBoxDescription.FAQAnswers.firstTime} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.workBeforeEvent} infoText = {infoBoxDescription.FAQAnswers.workBeforeEvent} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.hardware} infoText = {infoBoxDescription.FAQAnswers.hardware} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.maxTeam} infoText = {infoBoxDescription.FAQAnswers.maxTeam} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.judging} infoText = {infoBoxDescription.FAQAnswers.judging} />
                    <InfoBox infoTitle={infoBoxTitles.FAQ.more} infoText = {infoBoxDescription.FAQAnswers.more} />
                </div>
            </Section>
        );
    }
}
