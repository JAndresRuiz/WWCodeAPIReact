import { useState, useEffect } from "react";
import CardPokemon from "./CardPokemon";
import "../Styles/BuyCards.css";
import axios from "axios";

const BuyCards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);

  const [pokemonData, setPokemonData] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
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
  }, []);

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

  const handleTypeChange = (type) => {
    setFilterType(type);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemonData(data.results);
    };
    fetchPokemonData();
  }, []);

  /*
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${filterType}`
        );
        const url = await response.data;
        const data = url.pokemon;
        const promises = data.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
        });
        const results = await Promise.all(promises);
        setFilteredPokemon(results);
      } catch (error) {
        setFilterType(error);
      }
    };
    fetchPokemon();
  }, [filterType]);
*/

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
          {types.map((type) => (
            <h3
              onClick={() => handleTypeChange(type.name)}
              className="individuealType individuealTypeDark"
              key={type.id}
            >
              {type.name}
            </h3>
          ))}
        </div>
        <div className="cardsContainer">
          {filteredPokemon.length ? (
            <>
              {filteredPokemon.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {pokemonList.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BuyCards;

/*


{pokemonList.map((pokemon) => (
  <CardPokemon pokemon={pokemon} key={pokemon.id} />
))}



  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = response.data.results;
        const promises = data.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          console.log(data);
          const type = data.types;
          console.log(type);
        });
        const results = await Promise.all(promises);
        setPokemonList(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, []);

*/
