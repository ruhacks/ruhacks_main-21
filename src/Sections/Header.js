import React, { Component } from 'react';
import { AppBar, Drawer, Divider, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { ChevronRight, Email, Menu } from '@material-ui/icons'

import whiteLogo from '../images/RU_white.png';
import MLH from 'images/logos/mlh.svg';
import MLHBLue from 'images/logos/mlh-blue.svg';
import SignupModal from 'components/SignupModal';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            openDrawer: false,
            toggleModal: false,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
        this.toggleOpenModal = this.toggleOpenModal.bind(this)
    }

    preventDefault = (event) => event.preventDefault();

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    handleDrawerOpen(){
        this.setState({
            openDrawer: true,
        })
    }

    handleDrawerClose(){
        this.setState({
            openDrawer: false,
        })
    }

    toggleOpenModal = () =>{
        this.setState({
            toggleModal: !this.state.toggleModal
        })
    }

    renderDesktopHeaderBar(){
        return (
            <HideOnScroll {...this.props}>
                <AppBar elevation={0}>
                    <Toolbar className="heading-material">
                        <div className="header-con">
                            <Link href='#' variant='body1'>
                                <img src={whiteLogo} className='navLogo' alt='RU Hacks'/>
                            </Link>
                            <Link href='https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white'>
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

    renderMobileVersion(){
        return(
        <div className='mobile-heading'>
            <HideOnScroll {...this.props}>
                <AppBar elevation={0}>
                    <Toolbar className="heading-material">
                        <div className="header-con">
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                edge="start"
                                className={() =>{
                                    if(this.state.openDrawer){
                                        return 'iconButton-open'
                                    }else{
                                        return 'iconButton-closed'
                                    }
                                }}
                            >
                                <Menu />
                            </IconButton>
                            <Link href='#' className='mobile-logo' variant='body1'>
                                <img src={whiteLogo} className='navLogo' alt='RU Hacks'/>
                            </Link>
                            
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer 
                className='mobile-drawer'
                variant='persistent'
                anchor='left'
                open={this.state.openDrawer}
            >
                <div className='mobile-drawer-header'>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronRight />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button component='button' onClick={this.toggleOpenModal} key={'facebook'}>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText>Sign Up for our newsletter</ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button component='a' href='facebook.com/ryersonuhacks' key={'facebook'}>
                        <ListItemIcon>
                            <i className="fab fa-facebook-f" />{' '}
                        </ListItemIcon>
                        <ListItemText>Facebook</ListItemText>
                    </ListItem>
                    <ListItem button component='a' href='https://www.instagram.com/ruhacks/?hl=en' key={'instagram'}>
                        <ListItemIcon>
                            <i className="fab fa-instagram" />{' '}
                        </ListItemIcon>
                        <ListItemText>Instagram</ListItemText>
                    </ListItem>
                    <ListItem button component='a' href='https://twitter.com/ryersonuhacks' key={'twitter'}>
                        <ListItemIcon>
                            <i className="fab fa-twitter" />{' '}
                        </ListItemIcon>
                        <ListItemText>Twitter</ListItemText>

                    </ListItem>
                </List>
                <Divider />
                <Link href='https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white'>
                    <img
                        src={MLHBLue}
                        className="header-mlh-mobile"
                        alt="MLH Official 2021 Season"
                    />
                </Link>
            </Drawer>
        </div>
        )
    }

    render() {
        const { toggleModal ,width } = this.state
        return(
            <div>
                {(width > 650) && (
                    this.renderDesktopHeaderBar()
                )}
                {(width < 650) && (
                    this.renderMobileVersion()
                )}
                <SignupModal open = {toggleModal}/>
            </div>
        )
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
