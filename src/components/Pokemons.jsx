import { useState } from "react";

import pokemonsJson from "../data/pokemon.json";
import PokemonItem from "./PokemonItem";

import styles from "./Pokemons.module.css";

function Pokemons() {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [pokemons] = useState(pokemonsJson);
  const [filterPokemons, setFilterPokemons] = useState(pokemonsJson);

  const handleSearch = (e) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });

    setFilterPokemons(search);
  };

  const itemClick = (item) => {
    setPokemon(item);
    setIsOpen(true);
  };

  return (
    <div>
 <div
className={styles.modalPosition}
style={{
  display: isOpen ? "" : "none",
  backgroundColor: pokemon.color,
}}
>
<div className={styles.modalHeader}>
  <h1>{pokemon.name}</h1>
  <div className={styles.close} onClick={() => setIsOpen(false)}>
    +
  </div>
</div>

<div className={styles.modalContent}>
  <div>
    <img src={pokemon.imageUrl} width={200} alt="" />
  </div>
  <div>
    <p>Description :</p>
    <p>{pokemon.description}</p>
  </div>
  <div>
    <p>Genus :</p>
    <p>{pokemon.genus}</p>
  </div>
</div>
</div>

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
                itemClick={() => itemClick(item)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokemons;


