import React, { Component } from 'react';
import Section from '../components/Section';

export default class S05Sponsors extends Component {
    renderBackground() {
        return <div>this is 1 background</div>;
    }
    render() {
        return <Section background={this.renderBackground}>Sponsors</Section>;
    }
}
