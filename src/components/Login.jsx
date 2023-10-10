import { useState } from "react"

// import './Login.css'

function Login({setIsLogin}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = (event) => {
    event.preventDefault()
      if (user.username == 'skilvul' && user.password == 'admin'){
        setIsLogin(true)
      }
  }

  return (
    <form>
      <h1>Login Data Pokemon</h1>
      <input type="text" name="username" placeholder="username" onChange={handleChange} />
      <input type="password" name="password" placeholder="password" onChange={handleChange}/>
      <button onClick={handleLogin}>Login</button>
    </form>
  )
}


export default Login