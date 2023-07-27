import { useState, useEffect } from "react";
import CardPokemon from "./CardPokemon";
import "../Styles/BuyCards.css";
import axios from "axios";

const BuyCards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [showMore, setShowmore] = useState(20);
  const [pokemonFilterList, setPokemonFilterList] = useState([]);
  const [showfilter, setShowFilter] = useState(false);

  let morePokemos = 0;

  function showMorePokemons() {
    if (showMore > 139) {
      morePokemos = showMore + 11;
      setShowmore(morePokemos);
    } else {
      morePokemos = showMore + 20;
      setShowmore(morePokemos);
    }
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${showMore}`
        );
        const data = response.data.results;
        const promises = data.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
        });
        const results = await Promise.all(promises);
        setPokemonList(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, [showMore]);

  useEffect(() => {
    const filterPokemon = async () => {
      try {
        const url = await axios.get("https://pokeapi.co/api/v2/type");
        const data = url.data.results;
        const promise = data.map(async (type) => {
          const res = await fetch(type.url);
          const data = await res.json();
          return data;
        });
        const results = await Promise.all(promise);
        setTypes(results);
      } catch (error) {
        console.log(error);
      }
    };
    filterPokemon();
  }, []);

  const filtrarObjetos = (valorBoton) => {
    setPokemonFilterList(pokemonList);
    if (valorBoton == "borrar") {
      setPokemonFilterList(pokemonList);
      setShowFilter(false);
    } else {
      let newPokemons = pokemonList
        .filter((pokemon) =>
          pokemon.types.some((tipo) => tipo.type.name == valorBoton)
        )
        .map((pokemones) => {
          let pokemonfilter = { ...pokemones };
          return pokemonfilter;
        });
      setPokemonFilterList(newPokemons);
      setShowFilter(true);
    }
  };

  return (
    <>
      <div className="mainCardsContainer mainCardsContainerDark">
        <h1 className="pokemonCards pokemonCardsDark">
          Checkout Out Pokemon Cards
        </h1>
        <p className="pokemonGo pokemonGoDark">
          The Pokemon Go expansion for the Pokemon Trading Card <br /> Game will
          release soon.
        </p>
        <div className="pokemonTypes">
          <h3
            className="individuealType individuealTypeDark"
            onClick={() => filtrarObjetos("borrar")}
          >
            All
          </h3>
          {types.map((type) => (
            <h3
              onClick={() => filtrarObjetos(type.name)}
              className="individuealType individuealTypeDark"
              key={type.id}
            >
              {type.name}
            </h3>
          ))}
        </div>
        {!showfilter ? (
          <div className="cardsContainer">
            {pokemonList.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        ) : (
          <div className="cardsContainer">
            {pokemonFilterList.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        )}
        <div className="buttonContainer">
          <button
            className="showMoreButton"
            onClick={showMorePokemons}
            disabled={showMore >= 151}
          >
            Show More Cards
          </button>
          <p className="amountPokes">{showMore} Cards</p>
        </div>
      </div>
    </>
  );
};

export default BuyCards;

/*
<div className="cardsContainer">
          {pokemonList.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
*/
