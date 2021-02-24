import React, { Component } from 'react';
import Section from '../components/Section';
import Heading from 'components/Heading';

import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

import { Link } from '@material-ui/core';

import AGO from 'images/backgrounds/AGO/AGO.svg';
import AGO_BACK from 'images/backgrounds/AGO/AGO_BACK.svg';

/* Take as needed :)

import gcloud from 'images/sponsors/googlecloud.png'
import lighthouseLabs from 'images/sponsors/lighthouselabs.png'
import CSE from 'images/sponsors/CSE.png'
import BrainPower from 'images/sponsors/brain.png'
import CleanEnergyZone from 'images/sponsors/cleanzone.png'
import IEEE from 'images/sponsors/ieee.jpg'
import RSS from 'images/sponsors/ryerson-science-society.png'
import BMO from 'images/sponsors/BMO_logo.png'
import Jumpstart from 'images/sponsors/jumpstart.png'
import chainsafe from 'images/sponsors/chainsafe.png'
import Magnet from 'images/sponsors/magnet.png'
import WITM from 'images/sponsors/WITM.png'
import hackerearth from 'images/sponsors/hackerearth.png'
import Resolver from 'images/sponsors/resolver.jpg'
import TechDomains from 'images/sponsors/dot-tech-logo.png'
import FoundersBeta from 'images/sponsors/FoundersBeta_logo.png'
import iTrade from 'images/sponsors/itradenetwork.svg'
import Hypercare from 'images/sponsors/Hypercare.png'
import beamCity from 'images/sponsors/Beamcity_logo.png'
import FEAS from 'images/sponsors/FEAS.png'
import FOS from 'images/sponsors/ryerson-faculty-of-science-logo.png'
import StickerMule from 'images/sponsors/stickermule.svg'
import RSU from 'images/sponsors/rsu.png'
import DMZ from 'images/sponsors/DMZ.png'
import RESS from 'images/sponsors/ress.png' */

import MLH from 'images/sponsors/mlh-logo-color.png';
import balsamiq from 'images/sponsors/balsamiq.svg';
import echoAR from 'images/sponsors/echoAR.png';
import ECE from 'images/sponsors/ryerson_ece_logo.png';
import Wolfram from 'images/sponsors/wolfram.svg';
import FDM from 'images/sponsors/fdm-group.png';
import DCL from 'images/sponsors/DCL.png';
import Juno from 'images/sponsors/juno.png';
import iboost from 'images/sponsors/iboost_logo.png';
import Jetbrains from 'images/sponsors/jetbrains_logo.png';
import CryptoChicks from 'images/sponsors/CryptoChicks.png';
import Linode from 'images/sponsors/linode.png';
import one_password from 'images/sponsors/one_password.png';
import Voiceflow from 'images/sponsors/voiceflow.png';
import storagehotel from 'images/sponsors/storagehotel.png';
import Maplesoft from 'images/sponsors/Maplesoft.png';
import TheCodex from 'images/sponsors/codex.png';
import Seds from 'images/sponsors/seds.png';
import Qoom from 'images/sponsors/qoom.svg';
import Kuzo from 'images/sponsors/kuzo.png';
import Bubble from 'images/sponsors/bubble.png';
import RECESS from 'images/sponsors/RECESS.png'

export default class S05Sponsors extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id="colorSponsorsBack" className="colorSponsorsBack" />;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (
            <div className="bannerBack">
                <Parallax className="AGO" y={[-5, 5]} tagOuter="figure">
                    <Fade>
                        <img src={AGO} alt="Art Gallery of Ontario" />
                    </Fade>
                </Parallax>
                <img className="AGO_BACK" src={AGO_BACK} alt="Line 4" />
            </div>
        );
    }
    render() {
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
                className="sponsor-section"
            >
                <Heading headingText='Sponsors' extra='yellowText'/>
                <div className="sponsor-container">
                    <Link className="sponsor" href="https://www.ee.ryerson.ca/">
                        <img src={ECE} alt="ECE" />
                    </Link>
                    <Link
                        className="sponsor"
                        href="https://distributed.computer/"
                        style={{ backgroundColor: 'rgb(11,27,43)' }}
                    >
                        <img src={DCL} alt="Distributed Computer Labs" />
                    </Link>
                    <Link className="sponsor" href="https://junocollege.com/">
                        <img src={Juno} alt="Juno College" />
                    </Link>
                    <Link className="sponsor" href="https://www.ee.ryerson.ca/~recess/">
                        <img src={RECESS} alt="RECESS Ryerson Electrical and Computer Engineering Student Society " />
                    </Link>
                    <Link className="sponsor" href="https://www.iboostzone.com/">
                        <img src={iboost} alt="IBoost" />
                    </Link>
                    <Link className="sponsor" href="https://www.fdmgroup.com/en-ca/ca-home/">
                        <img src={FDM} alt="FDM" />
                    </Link>
                    <Link className="sponsor" href="https://www.jetbrains.com/">
                        <img src={Jetbrains} alt="Jetbrains" />
                    </Link>
                    <Link className="sponsor" href="https://www.echoar.xyz/">
                        <img src={echoAR} alt="echoAR" />
                    </Link>
                    <Link className="sponsor" href="https://balsamiq.com/">
                        <img src={balsamiq} alt="balsamiq" />
                    </Link>
                    <Link className="sponsor" href="https://cryptochicks.ca/">
                        <img src={CryptoChicks} alt="CryptoChicks" />
                    </Link>
                    <Link className="sponsor" href="https://mlh.io/">
                        <img src={MLH} alt="MLH" />
                    </Link>
                    <Link className="sponsor" href="https://www.wolfram.com/">
                        <img src={Wolfram} alt="Wolfram" />
                    </Link>
                    <Link className="sponsor" href="https://www.linode.com/">
                        <img src={Linode} alt="Linode" />
                    </Link>
                    <Link className="sponsor" href="https://1password.com/">
                        <img src={one_password} alt="One Password" />
                    </Link>
                    <Link className="sponsor" href="https://www.voiceflow.com/">
                        <img src={Voiceflow} alt="Voiceflow" />
                    </Link>
                    <Link className="sponsor" href="https://www.storagehotel.ca/">
                        <img src={storagehotel} alt="Storage Hotel" />
                    </Link>
                    <Link className="sponsor" href="https://www.maplesoft.com/">
                        <img src={Maplesoft} alt="Maplesoft" />
                    </Link>
                    <Link
                        className="sponsor"
                        href="https://thecodex.me/"
                        style={{ backgroundColor: 'black' }}
                    >
                        <img src={TheCodex} alt="The Codex" />
                    </Link>
                    <Link className="sponsor" href="https://seds.ca/">
                        <img
                            src={Seds}
                            alt="Students for the Exploration and Development of Space"
                        />
                    </Link>
                    <Link className="sponsor" href="https://www.qoom.io/">
                        <img src={Qoom} alt="Qoom" />
                    </Link>
                    <Link className="sponsor" href="https://kuzoclass.com/">
                        <img src={Kuzo} alt="Kuzo" />
                    </Link>
                    <Link className="sponsor" href="https://bubble.io/">
                        <img src={Bubble} alt="Bubble" />
                    </Link>
                </div>
            </Section>
        );
    }
}
