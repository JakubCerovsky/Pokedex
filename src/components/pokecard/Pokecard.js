import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pokecard.css";

export default function Pokecard({ pokemonName }) {
  const [pokemon, setPokemon] = useState({ id: 0, image: "", type: "" });

  const apiEndpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon({
          id: data.id,
          image: data.sprites.front_default,
          type: data.types[0].type.name,
        });
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }, [apiEndpoint]);

  return (
    <div className="card-container">
      <Link
        to={`/${pokemon.id}`}
        className={`card-container_front ${pokemon.type}`}
      >
        <img src={pokemon.image} alt="Pokemon" />
        {pokemonName}
      </Link>
    </div>
  );
}
