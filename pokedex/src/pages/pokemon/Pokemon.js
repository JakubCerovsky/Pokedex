import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState("");
  async function getPokemons() {
    const apiEndpoint = "https://pokeapi.co/api/v2/pokemon/" + name;
    console.log(apiEndpoint);

    await fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data.name);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }

  useEffect(() => {
    getPokemons();
  });
  return <>{pokemon}</>;
}
