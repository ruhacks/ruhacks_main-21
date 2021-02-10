import React, { Component } from 'react';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import whiteLogo from '../images/RU_white.png';
import MLH from 'images/logos/mlh.svg';
export default class Header extends Component {
    preventDefault = (event) => event.preventDefault();
    render() {
        return (
            <HideOnScroll {...this.props}>
                <AppBar elevation={0}>
                    <Toolbar className="heading-material">
                        <div className="header-con">
                            <Link href='#' variant='body1'>
                                <img src={whiteLogo} className='navLogo' alt='RU Hacks'/>
                            </Link>
                            <Link href='#' variant='body1'>
                                <div className="header-name">
                                    <Typography variant='body1'>RU HACKS</Typography>
                                </div> 
                            </Link>
                            <Link href='https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white'>
                            <img
                                src={MLH}
                                className="header-mlh"
                                alt="MLH Official 2021 Season"
                            ></img>
                            </Link>
                            
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
