import React, { Component } from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
        <div>
        <p className='titleMission'>Missões</p>
      <div data-testid="missions" className='missoes'>
        {missions.map(({ name, year, country, destination }, index) => (<MissionCard
          key={ index }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />))}
      </div>
      </div>
    );
  }
}