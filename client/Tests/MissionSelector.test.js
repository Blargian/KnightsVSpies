import {MissionSelector, MissionSelector} from '../Components/MissionSelector';
import React from 'react';
import { configure,mount } from 'enzyme';
import 'jsdom-global/register';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {playersMock,mockLeader} from './mock';

configure({ adapter: new Adapter() });

describe("MissionSelector component",()=>{
    
    test('Component should render a crown next to the mission leader',()=>{
        const wrapper = mount(<MissionSelector
            players={playersMock}  
            missionLeader={mockLeader}
            currentRound={0}
        />)

        const crownIcon = <FontAwesomeIcon icon={faCrown} className='text-amber-500 text-6xl'/>
        expect(wrapper.find(`div[key="${mockLeader}"]`).children().containsMatchingElement(crownIcon));
    })

    test('sendOnMissionHandler should remove a player from the selectedPlayers if it was already selected',()=>{
        const MissionSelector = <MissionSelector
            selfId = {playersMock[0].playerId}
            players={playersMock}  
            missionLeader={mockLeader}
            currentRound={0}
        />
    });
})