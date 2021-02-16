import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default class InfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.permanentOpen,
            hoverOpen: false,
            hoverPermOpen: false,
        };
    }

    handleOpenInfo = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleMouseEnter = () => {
        this.setState({
            hoverOpen: true,
        });
    };

    handleMouseExit = () => {
        this.setState({
            hoverOpen: false,
        });
    };

    handlePermOpen = () => {
        const { hoverOpen } = this.state;
        let isItPermOpen = this.state.hoverPermOpen;
        this.setState({
            hoverPermOpen: !isItPermOpen,
        });
        if (hoverOpen && isItPermOpen) {
            this.setState({
                hoverOpen: false,
            });
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        const { permanentOpen } = nextProps;
        if (this.props.permanentOpen !== permanentOpen) {
            this.setState({
                open: true,
            });
            return true;
        }
        if (nextState.open !== this.state.open) {
            return true;
        }
        return false;
    }

    renderNormalInfoBox = () => {
        const { open } = this.state;
        const { infoTitle, infoText, permanentOpen, titleVariant, textVariant } = this.props;
        return (
            <div>
                <Typography variant={titleVariant}>{infoTitle}</Typography>
                <hr />
                {open && (
                    <div className="inner-box-div">
                        <Typography variant={textVariant} className="answer">
                            {infoText}
                        </Typography>
                        <hr />
                        {!permanentOpen && (
                            <ArrowUpwardIcon
                                onClick={this.handleOpenInfo}
                                className="arrow-close-info"
                            />
                        )}
                    </div>
                )}

                {!open && (
                    <ArrowDownwardIcon onClick={this.handleOpenInfo} className="arrow-open-info" />
                )}
            </div>
        );
    };

    renderHoverInfoBox = () => {
        const { hoverOpen, hoverPermOpen } = this.state;
        const { infoTitle, infoText, titleVariant, textVariant } = this.props;

        const arrowClassName = hoverOpen ? 'arrow-hover open' : 'arrow-hover';

        return (
            <div
                className="inner-box-div hover"
                onClick={this.handlePermOpen}
                onMouseOver={this.handleMouseEnter}
                onMouseLeave={this.handleMouseExit}
            >
                <Typography variant={titleVariant}>{infoTitle}</Typography>
                <hr />
                {(hoverOpen || hoverPermOpen) && (
                    <div>
                        <Typography variant={textVariant} className="answer">
                            {infoText}
                        </Typography>
                        <hr />
                    </div>
                )}
                {!hoverPermOpen && <ArrowDownwardIcon className={arrowClassName} />}
            </div>
        );
    };

    render() {
        const { hoverMode } = this.props;
        return (
            <div className="section-info">
                {!hoverMode && this.renderNormalInfoBox()}
                {hoverMode && this.renderHoverInfoBox()}
            </div>
        );
    }
}
