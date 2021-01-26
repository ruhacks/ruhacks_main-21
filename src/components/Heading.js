import React, { Component } from 'react';

export default class Heading extends Component {
    render() {
        return (
            <h2 className="heading">
                <div className="heading-bg" />
                <div className="heading-box" />
                <div className="heading-box heading-boxL" />
                <div className="heading-text">Frequntly Asked Questions</div>
            </h2>
        );
    }
}
