import "./PokemonItem.css";

const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

function PokemonItem({ pokemon }) {
  return (
    <div
      // onClick={itemClick}
      className="pokemon-card"
      style={{
        backgroundColor: `${pokemon.color}`,
      }}
    >
      <img src={pokemon.imageUrl} alt="" width={250} />
      <h1>{pokemon.name}</h1>
      <div className="types-container">
        {pokemon.types.map((item, index) => (
          <>
            <span
              key={index}
              className="type-badge"
              style={{
                backgroundColor: colours[item.toLowerCase()],
              }}
            >
              {item}
            </span>
          </>
        ))}
      </div>

      <p className="description">
        {pokemon.description}
      </p>
    </div>
  );
}

export default PokemonItem;
