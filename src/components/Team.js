import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
import {Avatar, Typography} from '@material-ui/core'

//Co-chairs
import Annie from 'images/Team/Annie.jpg'
import Johnny from 'images/Team/Johnny.png'

//Comms
import Ella from 'images/Team/Ella.jpg'
import Marjan from 'images/Team/Marjan.jpg'
import Charith from 'images/Team/Charith.jpg'

//Dev
import Dan from 'images/Team/IMG_0072.jpg'
import Tarandeep from 'images/Team/Tarandeep.jpeg'
import Ahmad from 'images/Team/Ahmad.jpg'
import Farhan from 'images/Team/Farhan.jpg'

//Marketing
import Serena from 'images/Team/Serena.jpg'
import Asritha from 'images/Team/Asritha.jpg'
import Gabby from 'images/Team/Gabrielle.JPG'

//Ops
import Caroline from 'images/Team/Caroline.JPG'
import Ying from 'images/Team/Ying.JPG'
import Rupan from 'images/Team/Rupan.jpeg'

//Sponsorship
import Andrea from 'images/Team/Andrea.jpg'
import Jason from 'images/Team/Jason.jpg'
import Avi from 'images/Team/Avi.jpg'
import Carlo from 'images/Team/Giancarlo.jpg'

//Special
import Nazifa from 'images/Team/Nazifa.jpg'
import Sam from 'images/Team/Sam.JPG'

export default class Team extends Component {
    

    render(){

        return(
            <Carousel interval={10000}>
                {
                    team.map((team, i) => {
                        return <Item key={i} item={team}> </Item>
                    })
                }
            </Carousel>
        )
    }
}

function Item(props)
{   

    const { group, members } = props.item; 
    return (
        <div className='team'>
            <Typography className='team-group' variant='h4'>{group}</Typography>
            <div className='team-members'>
                {
                    members.map((member) => {
                        return(
                            <div className='team-person'>
                                <Avatar sizes='lg' className='team-person-photo' src={member.personComponent} alt={member.name}/>
                                <h2 className='team-person-name'>{member.name}</h2>
                                <p className='team-person-descript'>{member.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const team = [
    {
        group: 'Co-Chairs',
        members: [
            {
                name: "Annie",
                description: "Co-chair",
                personComponent: Annie
            },
            {
                name: "Johnny",
                description: "Co-chair",
                personComponent: Johnny
            },
        ]
    },
    {
        group: 'Communications',
        members: [
            {
                name: "Ella",
                description: "VP Communications",
                personComponent: Ella
            },
            {
                name: "Marjan",
                description: "Communications Associate",
                personComponent: Marjan
            },
            {
                name: "Charith",
                description: "Newsletter Editor",
                personComponent: Charith
            },
        ]
    },
    {
        group: 'Development',
        members: [
            {
                name: "Dan",
                description: "VP Development",
                personComponent: Dan
            },
            {
                name: "Ahmad",
                description: "Bot Developer",
                personComponent: Ahmad
            },
            {
                name: "Farhan",
                description: "Developer",
                personComponent: Farhan
            },
            {
                name: "Tarandeep",
                description: "Developer",
                personComponent: Tarandeep
            },
        ]
    },
    {
        group: 'Marketing',
        members: [
            {
                name: "Serena",
                description: "VP Marketing",
                personComponent: Serena
            },
            {
                name: "Asritha",
                description: "Social Media Coordinator",
                personComponent: Asritha
            },
            {
                name: "Gabby",
                description: "Graphic Designer",
                personComponent: Gabby
            },
        ]
    },
    {
        group: 'Operations',
        members: [
            {
                name: "Caroline",
                description: "VP Operations",
                personComponent: Caroline
            },
            {
                name: "Ying",
                description: "Logistics Coordinator",
                personComponent: Ying
            },
            {
                name: "Rupan",
                description: "Operations Coordinator",
                personComponent: Rupan
            },
            {
                name: "Farhan",
                description: "Hacker Experience Coordinator",
                personComponent: Farhan
            },
        ]
    },
    {
        group: 'Sponsorship Team',
        members: [
            {
                name: "Andrea",
                description: "VP Sponsorships",
                personComponent: Andrea
            },
            {
                name: "Jason",
                description: "Director of Internal Relations",
                personComponent: Jason
            },
            {
                name: "Avi",
                description: "Director of Corporate Relations",
                personComponent: Avi
            },
            {
                name: "Carlo",
                description: "Director of Finance",
                personComponent: Carlo
            },
        ]
    },
    {
        group: 'Special Thanks To',
        members: [
            {
                name: "Nazifa",
                description: "",
                personComponent: Nazifa
            },
            {
                name: "Sam",
                description: "",
                personComponent: Sam
            },
        ]
    }

]