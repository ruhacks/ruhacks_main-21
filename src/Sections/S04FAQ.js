import React, { Component } from 'react';
import Section from '../components/Section';

export default class S04FAQ extends Component {
    renderBackground() {
        return <div>this is 1 background</div>;
    }
    render() {
        return <Section background={this.renderBackground}>FAQ</Section>;
    }
}
