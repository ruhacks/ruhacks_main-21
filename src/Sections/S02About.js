import React, { Component } from 'react';
import Section from 'components/Section';
import InfoBox from 'components/InfoBox';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';

import { infoBoxTitles, infoBoxDescription } from 'config/Text';

import CN from 'images/backgrounds/CN/CN.svg';
import CN_BACK from 'images/backgrounds/CN/CN_BACK.svg';

export default class S02About extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id="colorRulesBack" className="colorRulesBack" />;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (
            <div className="bannerBack">
                <Parallax className="CN" y={[-10, -5]} tagOuter="figure">
                    <Fade>
                        <img src={CN} alt="CN Tower" />
                    </Fade>
                </Parallax>
                <Parallax className="CN-BACK" y={[0, 5]} tagOuter="figure">
                    <Fade>
                        <img src={CN_BACK} alt="CN Tower" />
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
                title={<div className="section-title__contentOnWhite">About RU Hacks</div>}
            >
                <div className="rules-container-info">
                    <InfoBox
                        infoTitle={infoBoxTitles.About.whatIs}
                        titleVariant="h4"
                        infoText={infoBoxDescription.AboutAnswers.whatIs}
                        textVariant="h5"
                        permanentOpen={true}
                    />
                    <InfoBox
                        infoTitle={infoBoxTitles.About.whyGo}
                        titleVariant="h4"
                        infoText={infoBoxDescription.AboutAnswers.whyGo}
                        textVariant="h5"
                        permanentOpen={true}
                    />
                </div>
            </Section>
        );
    }
}
