import React, { Component } from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul className="ulMissions">
        {missions.map(({ name, year, country, destination }, index) => (<MissionCard
          key={ index }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />))}
        </ul>
      </div>
    );
  }
}