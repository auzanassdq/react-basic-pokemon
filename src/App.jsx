import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Pokemons from "./components/Pokemons";
import Login from "./components/Login";

function App() {
  // let hewan = ["kucing", "domba", "burung"]
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? <Pokemons /> : <Login setIsLogin={setIsLogin} />}
      {/* {hewan.map((item,i) => (
        <li key={i}>{item}</li>
      ))} */}

      {/* <Card1 />
      <Card2 />
      <Card3 /> */}
    </>
  );
}

function Card1() {
  return (
    <div>
      <img src="html.jpg" />
      <h1>HTML Dasar</h1>
    </div>
  );
}

function Card2() {
  return (
    <div>
      <img src="css.jpg" />
      {/* <h1>CSS Dasar</h1> */}
    </div>
  );
}

function Card3() {
  return (
    <div>
      <img src="js.jpg" />
      <h1>Javascript Dasar</h1>
    </div>
  );
}

export default App;
