import { useState, useEffect } from "react";
import { Pokecard } from "../../components";
import "./pokemons.css";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pagination, setPagination] = useState({ limit: 12, offset: 0 });

  useEffect(() => {
    const apiEndpoint = `https://pokeapi.co/api/v2/pokemon?limit=${pagination.limit}&offset=${pagination.offset}`;

    const getPokemons = async () =>
      await fetch(apiEndpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setPokemons(data.results);
        })
        .catch((error) => {
          console.error("There was a problem fetching the data:", error);
        });

    getPokemons();
  }, [pagination]);

  return (
    <div className="pokemons-container">
      <div className="pokemons-container_pokecards">
        {pokemons.map((pokemon, index) => (
          <Pokecard key={index} pokemonName={pokemon.name} />
        ))}
      </div>
      <div className="pokemons-container_buttons">
        <button
          onClick={() =>
            setPagination({
              ...pagination,
              offset: pagination.offset - pagination.limit,
            })
          }
          className="pokemons-container_button"
          id="previous-btn"
          disabled={pagination.offset === 0}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPagination({
              ...pagination,
              offset: pagination.offset + pagination.limit,
            })
          }
          className="pokemons-container_button"
          id="next-btn"
          disabled={pagination.offset === 1296}
        >
          Next
        </button>
      </div>
    </div>
  );
}
