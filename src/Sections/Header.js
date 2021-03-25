import React, { Component } from 'react';
import {
    AppBar,
    Divider,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Slide,
    Toolbar,
    useScrollTrigger,
    SwipeableDrawer,
    Button,
} from '@material-ui/core';
import { ChevronRight, Menu } from '@material-ui/icons';

import whiteLogo from '../images/RU_white.png';
import MLH from 'images/logos/mlh.svg';
import MLHBLue from 'images/logos/mlh-blue.svg';
import SignupModal from 'components/SignupModal';

// Deprecated - Use title prop in section
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            openDrawer: false,
            toggleModal: false,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.toggleOpenModal = this.toggleOpenModal.bind(this);
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

    handleDrawerOpen() {
        this.setState({
            openDrawer: true,
        });
    }

    handleDrawerClose() {
        this.setState({
            openDrawer: false,
        });
    }

    toggleOpenModal = () => {
        this.setState({
            toggleModal: !this.state.toggleModal,
        });
    };

    renderDesktopHeaderBar() {
        return (
            <HideOnScroll {...this.props}>
                <AppBar elevation={0}>
                    <Toolbar className="heading-material">
                        <div className="header-con">
                            <Link href="#" variant="body1">
                                <img src={whiteLogo} className="navLogo" alt="RU Hacks" />
                            </Link>
                            <Button
                                target="_blank"
                                href="https://ruhacks.com/sponsorship"
                                className='header-button'
                                variant='outlined'
                                color='inherit'
                                size="large"
                                style= {{marginLeft: 'auto', marginRight: '10%'}}
                            >
                                Sponsor Us!
                            </Button>
                            <Link href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white">
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

    renderMobileVersion() {
        const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

        return (
            <div className="mobile-heading">
                <HideOnScroll {...this.props}>
                    <AppBar elevation={0}>
                        <Toolbar className="heading-material">
                            <div className="header-con">
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerOpen}
                                    edge="start"
                                    id="materialIconOpenDrawerButton"
                                    style={{cursor:'pointer'}}
                                    className={this.state.openDrawer ? 'iconButton-open' : 'iconButton-closed'}
                                >
                                    <Menu style={{cursor:'pointer'}}/>
                                </IconButton>
                                <Link href="#" className="mobile-logo" variant="body1" style={{cursor:'pointer'}}>
                                    <img src={whiteLogo} className="navLogo" alt="RU Hacks" />
                                </Link>
                            </div>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <SwipeableDrawer
                    className="mobile-drawer"
                    anchor="left"
                    open={this.state.openDrawer}
                    onOpen={this.handleDrawerOpen}
                    onClose={this.handleDrawerClose}
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    hysteresis={0.1}
                >
                    <div className="mobile-drawer-header">
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronRight />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem
                            button
                            component="button"
                            href={'https://app.ruhacks.com/'}
                            key={'mentors'}
                        >
                            <ListItemIcon>
                                <i class="fas fa-laptop-code fa-lg"></i>
                            </ListItemIcon>
                            <ListItemText>Hackers Sign up</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            component="button"
                            onClick={this.toggleOpenModal}
                            key={'newsletter'}
                        >
                            <ListItemIcon>
                                <i className="fas fa-newspaper fa-lg"></i>
                            </ListItemIcon>
                            <ListItemText>Sign Up for our newsletter</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            component="button"
                            href={'https://forms.gle/JaHdS8ecdabYq2RK9'}
                            key={'mentors'}
                        >
                            <ListItemIcon>
                                <i className="fas fa-hands-helping fa-lg"></i>
                            </ListItemIcon>
                            <ListItemText>Mentors sign up</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            component="button"
                            href={'https://forms.gle/e7SjWAVAmPdxASjz7'}
                            key={'workshop'}
                        >
                            <ListItemIcon>
                                <i className="fa fa-calendar-check fa-lg"></i>
                            </ListItemIcon>
                            <ListItemText>Host a Workshop</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            component="button"
                            href={'https://ruhacks.com/sponsorship'}
                            target="_blank"
                            key={'sponsor'}
                        >
                            <ListItemIcon>
                                <i class="fas fa-briefcase fa-lg"></i>
                            </ListItemIcon>
                            <ListItemText>Sponsor Us</ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem
                            button
                            component="a"
                            href="facebook.com/ryersonuhacks"
                            key={'facebook'}
                        >
                            <ListItemIcon>
                                <i className="fab fa-facebook-f" />{' '}
                            </ListItemIcon>
                            <ListItemText>Facebook</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            component="a"
                            href="https://www.instagram.com/ruhacks/?hl=en"
                            key={'instagram'}
                        >
                            <ListItemIcon>
                                <i className="fab fa-instagram" />{' '}
                            </ListItemIcon>
                            <ListItemText>Instagram</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            component="a"
                            href="https://twitter.com/ryersonuhacks"
                            key={'twitter'}
                        >
                            <ListItemIcon>
                                <i className="fab fa-twitter" />{' '}
                            </ListItemIcon>
                            <ListItemText>Twitter</ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <Link href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white">
                        <img
                            src={MLHBLue}
                            className="header-mlh-mobile"
                            alt="MLH Official 2021 Season"
                        />
                    </Link>
                </SwipeableDrawer>
            </div>
        );
    }

    render() {
        const { toggleModal, width } = this.state;
        return (
            <div>
                {width > 650 && this.renderDesktopHeaderBar()}
                {width < 650 && this.renderMobileVersion()}
                <SignupModal open={toggleModal} />
            </div>
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
