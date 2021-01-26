import React, { Component } from 'react';
import Section from 'components/Section';
import socials from './socials';
export default class Footer extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div style={{ backgroundColor: '#F0f0f0' }} />;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */

    render() {
        return (
            <Section className="footer-con" background={this.renderBackground}>
                <div className="footer-container">
                    <div className="footer-socials__con">
                        {socials.map(({ id, link, logo }) => {
                            return (
                                <a key={id} href={link} className="footer-socials__item">
                                    {logo}
                                </a>
                            );
                        })}
                    </div>
                    <div className="footer-row__con">
                        <div className="footer-row__item">© RU Hacks 2021</div>
                        <div className="footer-row__item">communications@ruhacks.com</div>
                        <a
                            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                            className="footer-row__item"
                        >
                            MLH Code of Conduct
                        </a>
                    </div>
                </div>
            </Section>
        );
    }
}
