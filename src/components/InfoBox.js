import React, { Component } from "react";
import { Typography } from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


export default class InfoBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: props.permanentOpen
        }
    }

    handleOpenInfo = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        const { open } = this.state
        const { infoTitle, infoText, permanentOpen, titleVariant, textVariant } = this.props
        return(
            <div className = "section-info">
                <Typography variant={titleVariant}>{infoTitle}</Typography>
                <hr />
                {open &&(
                    <div>
                        <Typography variant={textVariant} className="answer">{infoText}</Typography>
                        <hr />
                        {!permanentOpen && (
                            <ArrowUpwardIcon onClick={this.handleOpenInfo} className='arrow-close-info'/>
                        )
}
                    </div>
                )}
                
                {!open &&(
                    <ArrowDownwardIcon onClick={this.handleOpenInfo} className='arrow-open-info'/>
                )}
            </div>
        )
    }
}