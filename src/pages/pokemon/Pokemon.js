import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonInfo } from "../../components";
import "./pokemon.css";

export default function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: 0,
    height: 0,
    image: "",
    type: "",
    stats: [],
  });

  const apiEndpoint = "https://pokeapi.co/api/v2/pokemon/" + name;

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
          name: data.name,
          weight: data.weight,
          height: data.height,
          image: data.sprites.front_default,
          type: data.types[0].type.name,
          stats: data.stats,
        });
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }, [apiEndpoint]);

  return (
    <div className="pokemon-container">
      <PokemonInfo pokemon={pokemon} />
      <div className="pokemon-container_image-container">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="pokemon-container_image"
        />
        <div className="pokemon-shadow" />
      </div>
    </div>
  );
}
