import { useState } from "react";

import pokemonsJson from "../../data/pokemon.json";
import PokemonItem from "../PokemonItem/PokemonItem";

import "./PokemonList.css";

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
      <input
        type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
      />

      <div className="list-pokemon">
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
  );
}

export default Pokemons;
