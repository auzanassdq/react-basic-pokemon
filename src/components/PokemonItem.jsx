import styles from "./PokemonItem.module.css";

function PokemonItem({ pokemon, itemClick }) {
  // console.log(pokemon);
  const handleClick = () => {
    console.log("tess");
  };

  return (
    <div
      // className={styles.card}
      onClick={itemClick}
      style={{
        width: '300px',
        borderRadius: "5px",
        textAlign: "center",
        padding: "20px",
        // border: `2px solid ${pokemon.color}`,
        // boxShadow: `5px 5px ${pokemon.color}`,
        backgroundColor: `${pokemon.color}`,
        border: `2px solid black`,
        boxShadow: `5px 5px black`,

      }}
    >
      <img src={pokemon.imageUrl} alt="" width={250} />
      <p style={{
        fontSize: "1.5rem",
        padding: '10px'
      }}>{pokemon.name}</p>
      {pokemon.types.map((item, index) => (
        <>
          <span
            key={index}
            style={{
              backgroundColor: colours[item.toLowerCase()],
              padding: "4px",
              margin: "10px",
              color: "white",
              width: "100px",
              borderRadius: '8px',
              border: "2px solid black",
              display: "inline-block",
              fontSize: '1rem'
            }}
          >
            {item}
          </span>
          {/* <br /> */}
        </>
      ))}
      <p style={{
        textAlign: "left",
        margin: "10px",
        fontSize: "1.3rem"
      }}>{pokemon.description}</p>
    </div>
  );
}

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

export default PokemonItem;
