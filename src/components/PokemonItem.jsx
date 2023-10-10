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

function pokemonTypeImg(type) {
  switch (type) {
    case "dark":
      return "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg";
    case "Electric":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg";
    case "Fairy":
      return "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg";
    case "Fighting":
      return "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg";
    case "Ground":
      return "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg";
    case "Ice":
      return "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg";
    case "Poison":
      return "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg";
    case "Psychic":
      return "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg";
    case "Rock":
      return "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg";
    case "Steel":
      return "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg";
    case "Water":
      return "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg";
    case "Normal":
      return "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg";
  }
}
export default PokemonItem;
