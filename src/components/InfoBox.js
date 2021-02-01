import React, { Component } from "react";
import { Typography } from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


export default class InfoBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    handleOpenInfo = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        const { open } = this.state
        const { infoTitle, infoText } = this.props
        return(
            <div className = "section-info">
                <Typography variant="h4">{infoTitle}</Typography>
                <hr />
                {open &&(
                    <div>
                        <Typography variant="h6" className="answer">{infoText}</Typography>
                        <hr />
                        <ArrowUpwardIcon onClick={this.handleOpenInfo} className='arrow-close-info'/>
                    </div>
                )}
                
                {!open &&(
                    <ArrowDownwardIcon onClick={this.handleOpenInfo} className='arrow-open-info'/>
                )}
            </div>
        )
    }
}