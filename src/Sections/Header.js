import React, { Component } from "react";
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core'

import whiteLogo from '../images/RU_white.png'

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

        return(
            <AppBar position="static">
                <Toolbar>
                    <img src={whiteLogo} className='navLogo' alt='RU Hacks Logo'/>
                    <Typography className='navHeader' variant='h4'>
                        RU Hacks
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
