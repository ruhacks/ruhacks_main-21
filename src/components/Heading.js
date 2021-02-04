import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

export default class Heading extends Component {
    render() {
        const { headingText, old, extra } = this.props
        let headingTextClass = 'heading-text' 
        if(extra) headingTextClass = headingTextClass + ' ' + extra
        if(old){ //For testing purposes
            return (
                <div className='heading-textBox'>
                    <Typography variant="h4" component="h4">
                        {headingText} 
                    </Typography>
                </div>
            )
        }
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
