import React, { Component } from 'react';

export default class Section extends Component {
    componentDidMount(){
        const { clickableBackground, clickableCallBack, parentSVG } = this.props;
        if(clickableBackground && clickableCallBack && parentSVG){
            const background = document.getElementById(parentSVG)
            if(background){
                background.addEventListener('load', () => {
                    //Temporary for now to get it work for this specific back
                    const svgDoc = background.contentDocument
                    const editableElement = svgDoc.getElementById('news_svg')
                    editableElement.addEventListener('click', clickableCallBack)
                    
                    const backElement = svgDoc.getElementsByClassName('cls-175')
                    backElement[0].addEventListener('click', clickableCallBack)

                    const backElementTwo = svgDoc.getElementsByClassName('cls-174')
                    backElementTwo[0].addEventListener('click', clickableCallBack)
                })
            }
        }
    }
    render() {
        return (
            <div className={`section ${this.props.className || ''}`}>
                <div className="section-background">
                    {this.props.background ? this.props.background() : ''}
                </div>
                <div className=" cbk section-content ">
                    {this.props.cbackground ? this.props.cbackground() : ''}
                </div>
                {this.props.title ? (
                    <div className="section-title">
                        <div className="section-title__content">{this.props.title}</div>{' '}
                    </div>
                ) : (
                    ''
                )}

                <div className="section-content">{this.props.children}</div>
            </div>
        );
    }
}
