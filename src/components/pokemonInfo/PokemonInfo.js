import "./pokemonInfo.css";

export default function PokemonInfo({ pokemon }) {
  return (
    <div className={`pokemon_info-container ${pokemon.type}`}>
      <div className="pokemon_info-grid">
        <div className="pokemon_info-item">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="pokemon_info-item">
          <h3>{pokemon.type}</h3>
        </div>
        <div className="pokemon_info-item">
          <p>Weight:</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="pokemon_info-item">
          <p>Height:</p>
          <p>{pokemon.height}</p>
        </div>
        {pokemon.stats.map((stat, index) => (
          <div key={index} className="pokemon_info-item">
            <p>{stat.stat.name}:</p>
            <p>{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
