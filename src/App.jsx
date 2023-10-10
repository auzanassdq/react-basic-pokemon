import { useState } from "react";
import Pokemons from "./components/Pokemons";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? <Pokemons /> : <Login setIsLogin={setIsLogin} />}
    </>
  );
}

export default App;
