import { useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Digite o e-mail e a senha para entrar.");
    } else {
      console.log(`Email: ${email}`);
      console.log(`Senha: ${password}`);
      navigate("/favorites");
    }
  };
  return (
    <div className="container">
      <div className="login-left">
        <img src="./pokemon.png" alt="" />
        <h1>Comece a coletar pokémons!</h1>
        <div>
          <form onSubmit={handleSubmit} className="login-area">
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
      <div className="login-img">
        <img src="./login-area.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
