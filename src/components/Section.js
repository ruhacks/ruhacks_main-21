import React, { Component } from 'react';

export default class Section extends Component {
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
