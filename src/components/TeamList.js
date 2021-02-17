import React, { Component } from 'react';
import { Fragment } from 'react';
import teammembers from 'values/team';
export default class TeamList extends Component {
    state = {
        hover: false,
    };
    render() {
        return (
            <Fragment>
                <div className="tm-con mobile-hide">
                    {teammembers.map(({ group, members }) => (
                        <div className="tm-row" key={group}>
                            <div className="tm-group">{group}</div>
                            {members.map(({ name, personComponent, description }) => (
                                <div
                                    className={`tm-person ${
                                        this.state.hover ? 'tm-person__small' : ''
                                    }`}
                                    key={name}
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
                <MobileTeam></MobileTeam>
            </Fragment>
        );
    }
}

class MobileTeam extends Component {
    constructor(props) {
        super(props);
        this.state = { active: -1 };
    }
    render() {
        return (
            <div className="mteam-con mobile-show">
                <div className="mteam-list">
                    {teammembers.map(({ group, members }, i) => (
                        <MobileTeamGroup
                            group={group}
                            members={members}
                            active={i === this.state.active}
                            changeGroup={() => {
                                this.setState({ active: this.state.active === i ? -1 : i });
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
class MobileTeamGroup extends Component {
    render() {
        let { group, members, active, changeGroup } = this.props;
        return (
            <div className="mteam-ind__con" key={group}>
                <div className="mteam-ind__title" onClick={changeGroup}>
                    <div className={`mteam-ind__titlearrow ${active ? 'r' : ''}`}>
                        <i class="fas fa-caret-right"></i>
                    </div>
                    {group}
                </div>
                <div className={`mteam-ind__list ${active ? 'r' : ''}`}>
                    {members.map(({ name, personComponent, description }) => (
                        <div className="mteam-c">
                            <div
                                className="mteam-c__img"
                                style={{ backgroundImage: `url(${personComponent})` }}
                            ></div>

                            <div className="mteam-c__text">
                                <div className="mteam-c__name">{name}</div>
                                <div className="mteam-c__descp">{description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
