import React, { Component } from 'react';
import Footer from 'Sections/Footer';
import Header from 'Sections/Header';
import Intro from './Sections/S01Intro';
import About from './Sections/S02About';
import Prev from './Sections/S03Prev';
import FAQ from './Sections/S04FAQ';
import Sponsors from './Sections/S05Sponsors';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Intro />
                <About />
                <Prev />
                <FAQ />
                <Sponsors />
                <Footer />
            </div>
        );
    }
}
