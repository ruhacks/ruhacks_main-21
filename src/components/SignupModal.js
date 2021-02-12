import React from 'react';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import axios from "axios";

const API_URL = 'http://localhost:5000/signup'



export default class SignupModal extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            newsletterModal: false,
            parentToggledToOpen: props.open,
            email: '',
            name: '',
            successText: '',
            failText: '',
            signedUp: false,
            submitted: false,
            newsletterErr: false,
            progress: false,
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.setCloseMode = this.setCloseMode.bind(this)
        this.setOpenMode = this.setOpenMode.bind(this)
        this.handleNewsletterSignup = this.handleNewsletterSignup.bind(this)
    }

    handleEmailChange({target}){
        this.setState({
            email: target.value
        })
    }

    handleNameChange({target}){
        this.setState({
            name: target.value
        })
    }

    handleNewsletterSignup(){
        let formData = {};
        const { email, name } = this.state
        formData['EMAIL'] = email
        formData['NAME'] = name
        this.setState({
            submitted: true,
            progress: true,                 
        })
        axios.post(API_URL, {formData})
        .then(response => {
            let responseTxt= ''
            if(response.data.added_subscription){
                responseTxt= 'You have been sucessfully signed up!'
            }else if(response.data.already_subscribed){
                responseTxt = 'Looks like we already got you!'
            }
            this.setState({
                signedUp: true,
                submitted: true,
                progress: false,
                newsletterErr: false,
                successText: responseTxt,
            })
        })
        .catch(error => {
            this.setState({
                signedUp: false,
                submitted: true,
                progress: false,
                newsletterErr: true,
                errorText: 'ERROR!'
            })
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.open !== this.props.open){
            this.setState({
                newsletterModal: true
            })
        }
    }

    setCloseMode = () => {
        this.setState({
            newsletterModal: false
        })
    }

    setOpenMode(){
        this.setState({
            newsletterModal: true
        })
    }

    render(){
        return(
            <Dialog 
                open={this.state.newsletterModal}
                onClose={this.setCloseMode}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Subscribe to our newsletter</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to our monthly newsletter, please enter your email address and name here.
                    </DialogContentText>
                    {(this.state.signedUp && !this.state.progress) && (
                        <p className='success'>
                            {this.state.successText}
                        </p>
                    )}
                    {(this.state.newsletterErr && !this.state.progress) && (
                        <p className='failure'>
                            {this.state.failText}
                        </p>
                    )}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="EMAIL"
                        name='EMAIL'
                        label="Email Address"
                        type="email"
                        onChange={this.handleEmailChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="NAME"
                        name='NAME'
                        label="Name"
                        onChange={this.handleNameChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.setCloseMode} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleNewsletterSignup} color="primary">
                        Subscribe
                    </Button>
                    {(this.state.progress) && (
                        <CircularProgress />
                    )}
                </DialogActions>
            </Dialog>
        )
    }
}