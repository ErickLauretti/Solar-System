import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div data-testid="mission-card" className='divMissions'>
        <p data-testid="mission-name">
          { name }
        </p>
        <hr />
        <section className='sectionMissions'>
        <p data-testid="mission-year" className='p1'>
          { year }
        </p>
        <p data-testid="mission-country" className='p2'>
          { country }
        </p>
        <p data-testid="mission-destination" className='p3'>
          { destination }
        </p>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: {},
  year: {},
  country: {},
  destination: {},
};