import React, { Component } from 'react';
import Section from '../components/Section';

export default class S02Rules extends Component {
    renderBackground() {
        return <div>this is 2 background</div>;
    }
    render() {
        return <Section background={this.renderBackground}>Rules</Section>;
    }
}
