import React, { Component, useState } from 'react';
import teammembers from 'values/team';
export default class TeamList extends Component {
    state = {
        hover: false,
    };
    render() {
        return (
            <div className="tm-con">
                {teammembers.map(({ group, members }) => (
                    <div className="tm-row">
                        <div className="tm-group">{group}</div>
                        {members.map(({ name, personComponent, description }) => (
                            <div
                                className={`tm-person ${
                                    this.state.hover ? 'tm-person__small' : ''
                                }`}
                                onMouseEnter={() => this.setState({ hover: 1 })}
                                onMouseLeave={() => this.setState({ hover: false })}
                            >
                                <div
                                    alt={name}
                                    className="tm-person__image"
                                    style={{ backgroundImage: `url(${personComponent})` }}
                                />
                                <div className="tm-person__text">
                                    <div className="tm-person__name">{name}</div>
                                    <div className="tm-person__description">{description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
function PersonComponent(props) {
    let { name, description, personComponent } = props;
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    return (
        <div
            className="tm-person"
            onMouseEnter={() => this.setState({ hover: 1 })}
            onMouseLeave={() => this.setState({ hover: false })}
        >
            <div
                alt={name}
                className="tm-person__image"
                style={{ backgroundImage: `url(${personComponent})` }}
            />
            <div className="tm-person__name">{name}</div>
            <div className="tm-person__description">{description}</div>
        </div>
    );
}
