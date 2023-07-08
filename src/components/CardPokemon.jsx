import '../Styles/CardPokemon.css';

const CardPokemon = ({ pokemon }) => {
  return (
      <div className="cardContainer">
        <span className='nameLike'>
            <h3>{pokemon.name}</h3>
            <img src="" alt="" />
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
