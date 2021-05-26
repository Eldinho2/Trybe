import React from 'react';
import PropTypes from "prop-types"
import ListaDePokemons from './data'
import Pokedex from './Pokedex'
import './Pokemon.css'

class App extends React.Component {
  render() {
    return (
      <main className='main'>
         <h1>Pokedéx</h1>
         <Pokedex pokemons={ListaDePokemons} />
      </main>
    )
  }
}

export default App;
