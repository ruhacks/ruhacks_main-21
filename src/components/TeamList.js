import React, { Component } from 'react';
import teammembers from 'values/team';
export default class TeamList extends Component {
    render() {
        return (
            <div className="tm-con">
                {teammembers.map(({ group, members }) => (
                    <div className="tm-row">
                        <div className="tm-group">{group}</div>
                        {members.map(({ name, description, personComponent }) => (
                            <div className="tm-person">
                                <div
                                    alt={name}
                                    className="tm-person__image"
                                    style={{ backgroundImage: `url(${personComponent})` }}
                                />
                                <div className="tm-person__name">{name}</div>
                                <div className="tm-person__description">{description}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
