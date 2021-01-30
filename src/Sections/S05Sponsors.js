import React, { Component } from "react";
import Section from "../components/Section";
import Heading from 'components/Heading';

import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

import { Link } from '@material-ui/core'

import AGO from 'images/backgrounds/AGO/AGO.svg'

import gcloud from 'images/past_sponsors/googlecloud.png'
import lighthouseLabs from 'images/past_sponsors/lighthouselabs.png'
import CSE from 'images/past_sponsors/CSE.png'
import MLH from 'images/past_sponsors/mlh-logo-color.png'
import BMO from 'images/past_sponsors/BMO_logo.png'
import Jumpstart from 'images/past_sponsors/jumpstart.png'
import chainsafe from 'images/past_sponsors/chainsafe.png'
import Magnet from 'images/sponsors/magnet.png'
import WITM from 'images/sponsors/WITM.png'
import hackerearth from 'images/past_sponsors/hackerearth.png'
import Resolver from 'images/past_sponsors/resolver.jpg'
import TechDomains from 'images/past_sponsors/dot-tech-logo.png'
import FoundersBeta from 'images/past_sponsors/FoundersBeta_logo.png'
import iTrade from 'images/past_sponsors/itradenetwork.svg'
import Hypercare from 'images/past_sponsors/Hypercare.png'
import balsamiq from 'images/sponsors/balsamiq.svg'
import echoAR from 'images/sponsors/echoAR.png'
import DMZ from 'images/sponsors/DMZ.png'
import RESS from 'images/sponsors/ress.png'
import ECE from 'images/sponsors/ryerson_ece_logo.png'
import beamCity from 'images/past_sponsors/Beamcity_logo.png'
import FEAS from 'images/sponsors/FEAS.png'
import FOS from 'images/sponsors/ryerson-faculty-of-science-logo.png'
import StickerMule from 'images/sponsors/stickermule.svg'
import RSU from 'images/past_sponsors/rsu.png'
import Wolfram from 'images/sponsors/wolfram.svg'
import FDM from 'images/past_sponsors/fdm-group.png'
import BrainPower from 'images/past_sponsors/brain.png'
import CleanEnergyZone from 'images/past_sponsors/cleanzone.png'
import IEEE from 'images/past_sponsors/ieee.jpg'
import RSS from 'images/sponsors/ryerson-science-society.png'
export default class S05Sponsors extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div id='colorSponsorsBack' className='colorSponsorsBack'/>;    
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return (<div className='bannerBack'>
        <Parallax className="AGO" y={[-5, 5]} tagOuter="figure">
            <Fade>
                <img src={AGO} alt='Ryerson Student Learning center'/>
            </Fade>
        </Parallax>
    </div>);
    }
    render() {
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
                className='sponsor-section'
            >
                <Heading headingText='Sponsors' />
                <div className='sponsor-container'>
                    <div className='sponsor-row'>
                        <Link className='sponsor' href="https://cloud.google.com/">
                            <img src={gcloud} alt='google-cloud'/>
                        </Link>
                        <Link className='sponsor' href="https://www.lighthouselabs.ca/">
                            <img src={lighthouseLabs} alt='Lighthouse Labs'/>
                        </Link>
                        <Link className='sponsor' href="https://www.cse-cst.gc.ca/en">
                            <img src={CSE} alt='CSE'/>
                        </Link>
                        <Link className='sponsor' href="https://mlh.io/">
                            <img src={MLH} alt='MLH'/>
                        </Link>
                    </div>
                    <div className='sponsor-row'>
                        <Link className='sponsor' href="https://www.bmo.com/main/personal">
                            <img src={BMO} alt='BMO'/>
                        </Link>
                        <Link className='sponsor' href="https://jumpstart.me/">
                            <img src={Jumpstart} alt='Jumpstart'/>
                        </Link>
                        <Link className='sponsor' href="https://magnet.today/">
                            <img src={Magnet} alt='Magnet'/>
                        </Link>
                    </div>
                    <div className='sponsor-row'>
                        
                        <Link className='sponsor' href="https://www.resolver.com/">
                            <img src={TechDomains} alt='TechDomains'/>
                        </Link>
                        <Link className='sponsor' href="https://www.foundersbeta.com/">
                            <img src={FoundersBeta} alt='FoundersBeta'/>
                        </Link>
                        <Link className='sponsor' href="https://chainsafe.io/">
                            <img src={chainsafe} alt='chainsafe'/>
                        </Link>
                        <Link className='sponsor' href="https://www.itradenetwork.com/">
                            <img src={iTrade} alt='iTradeNetwork'/>
                        </Link>
                    </div>
                    <div className='sponsor-row'>
                        <Link className='sponsor' href="https://www.hypercare.com/">
                            <img src={Hypercare} alt='Hypercare'/>
                        </Link>
                        <Link className='sponsor' href="https://balsamiq.com/">
                            <img src={balsamiq} alt='balsamiq'/>
                        </Link>
                        <Link className='sponsor' href="https://www.echoar.xyz/">
                            <img src={echoAR} alt='echoAR'/>
                        </Link>
                        <Link className='sponsor' href="https://dmz.ryerson.ca/">
                            <img src={DMZ} alt='DMZ'/>
                        </Link>
                        
                    </div>
                    <div className='sponsor-row'>
                        <Link className='sponsor' href="https://www.ee.ryerson.ca/">
                            <img src={ECE} alt='ECE'/>
                        </Link>
                        <Link className='sponsor' href="https://www.beam.city/">
                            <img src={beamCity} alt='beam City'/>
                        </Link>
                        <Link className='sponsor' href="https://www.ryerson.ca/engineering-architectural-science/">
                            <img src={FEAS} alt='FEAS'/>
                        </Link>
                        <Link className='sponsor' href="https://www.hackerearth.com/">
                            <img src={hackerearth} alt='hackerearth'/>
                        </Link>
                    </div>
                    <div className='sponsor-row'>
                        <Link className='sponsor' href="https://www.ryerson.ca/science/">
                            <img src={FOS} alt='FOS'/>
                        </Link>
                        <Link className='sponsor' href="http://hackp.ac/mlh-stickermule-hackathons">
                            <img src={StickerMule} alt='StickerMule'/>
                        </Link>
                        <Link className='sponsor' href="http://www.rsuonline.ca/">
                            <img src={RSU} alt='RSU'/>
                        </Link>
                        <Link className='sponsor' href="https://www.wolfram.com/">
                            <img src={Wolfram} alt='Wolfram'/>
                        </Link>
                        
                    </div>
                    <div className='sponsor-row'>
                        <Link className='sponsor' href="https://www.brainpower.ca/">
                            <img src={BrainPower} alt='BrainPower'/>
                        </Link>
                        <Link className='sponsor' href="https://www.ryerson.ca/cue/clean-energy-zone/">
                            <img src={CleanEnergyZone} alt='Clean Energy Zone'/>
                        </Link>
                        <Link className='sponsor' href="http://www.ieeecanadianfoundation.org/EN/">
                            <img src={IEEE} alt='IEEE'/>
                        </Link>
                        <Link className='sponsor' href="https://www.rssonline.ca/">
                            <img src={RSS} alt='RSS'/>
                        </Link>
                    </div>
                    <div className='sponsor-row'>
                        <Link className='sponsor' href="https://www.ress.ca/">
                            <img src={RESS} alt='RESS'/>
                        </Link>
                        <Link className='sponsor' href="https://www.resolver.com/">
                            <img src={Resolver} alt='resolver'/>
                        </Link>
                        <Link className='sponsor' href="https://www.fdmgroup.com/en-ca/ca-home/">
                            <img src={FDM} alt='FDM'/>
                        </Link>
                        <Link className='sponsor' href="https://www.witm.ca/">
                            <img src={WITM} alt='WITM'/>
                        </Link>
                    </div>
                </div>
            </Section>
        );
    }
}
