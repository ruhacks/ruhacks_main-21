import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Avatar, Typography } from '@material-ui/core';
import teammembers from 'values/team';

export default class Team extends Component {
    render() {
        return (
            <Carousel interval={10000}>
                {teammembers.map((team, i) => {
                    return (
                        <Item key={i} item={team}>
                            {' '}
                        </Item>
                    );
                })}
            </Carousel>
        );
    }
}

function Item(props) {
    const { group, members } = props.item;
    return (
        <div className="team">
            <Typography className="team-group" variant="h4">
                {group}
            </Typography>
            <div className="team-members">
                {members.map((member) => {
                    return (
                        <div className="team-person">
                            <Avatar
                                sizes="lg"
                                className="team-person-photo"
                                src={member.personComponent}
                                alt={member.name}
                            />
                            <h2 className="team-person-name">{member.name}</h2>
                            <p className="team-person-descript">{member.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
