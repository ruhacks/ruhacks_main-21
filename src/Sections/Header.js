import React, { Component, Fragment } from 'react';
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import whiteLogo from '../images/RU_white.png';
import MLH from 'images/logos/mlh.svg';
export default class Header extends Component {
    preventDefault = (event) => event.preventDefault();
    render() {
        /*return (
            <div className='navContent'>
                <div className='leftContent'>
                    <img src={whiteLogo} className='navLogo' alt='RU Hacks Logo'/>
                    <Typography className='navHeader' variant='h4'>
                        RU Hacks
                    </Typography>
                </div>
            </div>
        );*/

        return (
            <HideOnScroll {...this.props}>
                <AppBar elevation={0}>
                    <Toolbar>
                        <div className="header-con">
                            <div className="header-name">RUHACKS</div>
                            <div className="header-socials">SOCIALS</div>
                            <img
                                src={MLH}
                                className="header-mlh"
                                alt="MLH Official 2021 Season"
                            ></img>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        );
    }
}
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
