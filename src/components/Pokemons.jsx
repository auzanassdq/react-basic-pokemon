import { useState } from "react";

import pokemonsJson from "../data/pokemon.json";
import PokemonItem from "./PokemonItem";

import styles from "./Pokemons.module.css";

function Pokemons() {
  const [pokemons] = useState(pokemonsJson);
  const [filterPokemons, setFilterPokemons] = useState(pokemonsJson);

  const handleSearch = (e) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });

    setFilterPokemons(search);
  };

  // const itemClick = (item) => {
  //   setPokemon(item);
  //   setIsOpen(true);
  // };

  return (
    <div>
      <div className="list-pokemon">
        <input
          type="text"
          placeholder="cari pokemon..."
          onChange={handleSearch}
          className={styles.search}
        />

        <div className={styles.listContainer}>
          {filterPokemons.length == 0 ? (
            <div>data tidak ditemukan</div>
          ) : (
            filterPokemons.map((item) => (
              <PokemonItem
                key={item.id}
                pokemon={item}
                // itemClick={() => itemClick(item)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokemons;