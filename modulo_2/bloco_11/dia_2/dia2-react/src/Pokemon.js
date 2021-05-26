import React from "react";
import PropTypes from "prop-types";
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight} = this.props.pokemons;

    return (
      <div className='pokemon'>
          <div>
           <p>{name}</p>
           <p>{type}</p>
           <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
         </div>
         < img src={image} alt='pokemonImages' />
     </div>
    );
  }
}

export default Pokemon;
