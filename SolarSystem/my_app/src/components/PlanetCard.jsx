import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card" className='container'>
        <section data-testid="planet-name" className='planetCard'>
          <img src={ planetImage } alt="imagem do planeta" />
          <p>{ planetName }</p>
        </section>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: {},
  planetImage: {},
};