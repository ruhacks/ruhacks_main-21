import React, { Component } from 'react';

export default class Heading extends Component {
    render() {
        const { headingText, extra } = this.props;
        let headingTextClass = 'heading-text';
        if (extra) headingTextClass = headingTextClass + ' ' + extra;
        return (
            <h2 className="heading">
                <div className="heading-bg" />
                <div className="heading-box" />
                <div className="heading-box heading-boxL" />
                <div className={headingTextClass}>{headingText}</div>
            </h2>
        );
    }
}
