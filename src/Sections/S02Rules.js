import React, { Component } from "react";
import Section from "../components/Section";

export default class S02Rules extends Component {
    /**
     * Use this for setting the color for hte full section
     * Make the width and height of the returning div 100%
     */
    renderBackground() {
        return <div>this is 2 background</div>;
    }
    /**
     * Use this for setting up background images
     * Use position absolute to position the dives
     */
    renderContainerBackground() {
        return <div>this is 2 background</div>;
    }
    render() {
        return (
            <Section
                cbackground={this.renderContainerBackground}
                background={this.renderBackground}
            >
                Rules
            </Section>
        );
    }
}
