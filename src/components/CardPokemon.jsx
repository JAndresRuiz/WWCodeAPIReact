import '../Styles/CardPokemon.css';
import { useState, useEffect } from 'react';

const CardPokemon = ({ pokemon }) => {
const [like, setLike] = useState(false);

const toggleClass = () => {
  setLike((state) => !state);
};

useEffect(() => {
  const storedLiked = localStorage.getItem(pokemon.id);
    if (storedLiked) {
      setLike(JSON.parse(storedLiked));
    }
}, [pokemon.id]);

useEffect(() => {
  localStorage.setItem(pokemon.id, JSON.stringify(like));
}, [pokemon.id, like]);
  
  return (
      <div className="cardContainer">
        <span className='nameLike'>
            <h3>{pokemon.name}</h3>
            <h2 className={like ? 'pokeLikeRed' : ''} onClick={toggleClass}>♥</h2>
        </span>
        <div className='imageContent'>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <span className='idContent'>
            <h3>{pokemon.id}</h3>
            <button>Buy</button>
        </span>
      </div>
  );
};

export default CardPokemon;
