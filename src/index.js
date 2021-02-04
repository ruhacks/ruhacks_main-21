import React from 'react';
import ReactDOM from 'react-dom';
import 'css/main.scss';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#3159a8',
            dark: '#17193d',
            main: '#264288',
        },
        secondary: {
            dark: '#fbe006',
            light: '#fbeebb',
            main: '#f6e17e',
        },
        neutral: {
            dark: '#37527c',
            light: '#7a90a1',
            main: '#4ba3b7',
        },
    },
    typography: {
        h1: {
            fontSize: '8rem'
        },
        h2 : {
            fontSize: '6rem'
        },
        h3: {
            fontSize: '4rem'
        },
    }
});

theme = responsiveFontSizes(theme)

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
