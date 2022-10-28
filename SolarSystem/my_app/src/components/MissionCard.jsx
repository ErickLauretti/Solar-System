import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          { name }
        </p>
        <p data-testid="mission-year">
          { year }
        </p>
        <p data-testid="mission-country">
          { country }
        </p>
        <p data-testid="mission-destination">
          { destination }
        </p>
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