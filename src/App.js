import React, { Component } from 'react';
import Intro from './Sections/S01Intro';
import Rules from './Sections/S02Rules';
import About from './Sections/S03About';
import FAQ from './Sections/S04FAQ';
import Sponsors from './Sections/S05Sponsors';

export default class App extends Component {
    render() {
        return (
            <div>
                <Intro />
                <Rules />
                <About />
                <FAQ />
                <Sponsors />
            </div>
        );
    }
}
