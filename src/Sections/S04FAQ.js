import Heading from 'components/Heading';
import React, { Component } from 'react';
import Section from '../components/Section';
import InfoBox from 'components/InfoBox';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';

import { infoBoxTitles, infoBoxDescription } from 'config/Text';

import ROM from 'images/backgrounds/ROM/ROM.svg';
import ROM_BACK from 'images/backgrounds/ROM/ROM_BACK.svg';

const WIDTH_TRIGGER = 992;
export default class S04FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerWidth };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id="colorFAQBack" className="colorFAQBack" />;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (
            <div className="bannerBack">
                <Parallax className="ROM" y={[-5, 5]} tagOuter="figure">
                    <Fade>
                        <img src={ROM} alt="Ryerson Student Learning center" />
                    </Fade>
                </Parallax>
                <Parallax className="ROM-BACK" y={[-15, 10]} tagOuter="figure">
                    <img src={ROM_BACK} alt="SLC BACKGROUND" />
                </Parallax>
            </div>
        );
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextState.width <= WIDTH_TRIGGER ||
            (this.state.width < nextState.width &&
                nextState.width > WIDTH_TRIGGER &&
                this.state.width <= WIDTH_TRIGGER) ||
            this.state.width === 0
        ) {
            return true;
        }
        return false;
    }

    render() {
        const { width } = this.state;
        let pmOpen = true;
        if (width <= WIDTH_TRIGGER && width !== 0) {
            pmOpen = false;
        }
        const { FAQ: FAQQuestions } = infoBoxTitles;
        const { FAQAnswers } = infoBoxDescription;
        const FAQTitles = [
            'whoCanAttend',
            'whenCanISignUp',
            'cost',
            'priorExperience',
            'workBeforeEvent',
            'judging',
            'hardware',
            'maxTeam',
            'more',
        ];
        const FAQPairs = FAQTitles.map((f) => {
            return { q: FAQQuestions[f], a: FAQAnswers[f] };
        });
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
            >
                <Heading headingText="Frequently Asked Questions" extra="yellowText" />
                <div className="faq-container-info">
                    {FAQPairs.map(({ q, a }) => {
                        return (
                            <InfoBox
                                permanentOpen={pmOpen}
                                infoTitle={q}
                                titleVariant="h5"
                                infoText={a}
                                textVariant="h6"
                            />
                        );
                    })}
                </div>
            </Section>
        );
    }
}
