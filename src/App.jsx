import { useState, useEffect } from "react";
import "./App.css";

function App() {

  // useState
  const [contador, setContador] = useState(0);
  const [likes, setLikes] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const [dark, setDark] = useState(false);
  const [nome, setNome] = useState("");

  // useEffect
  const [carregando, setCarregando] = useState(true);

  // Atualizar título
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  // Console
  useEffect(() => {
    console.log("Nome mudou!");
  }, [nome]);

  // Carregamento
  useEffect(() => {

    setTimeout(() => {
      setCarregando(false);
    }, 3000);

  }, []);

  return (

    <div className={dark ? "container dark" : "container"}>

      <h1 className="titulo">
        🚀 Atividades React
      </h1>

      {/* CONTADOR */}

      <div className="card">

        <h2>🔢 Contador</h2>

        <h1>{contador}</h1>

        <div className="buttons">

          <button onClick={() => setContador(contador + 1)}>
            ➕
          </button>

          <button
            onClick={() => {
              if (contador > 0) {
                setContador(contador - 1);
              }
            }}
          >
            ➖
          </button>

        </div>

      </div>

      {/* LIKE */}

      <div className="card">

        <h2>❤️ Like Instagram</h2>

        <h1>{likes}</h1>

        <div className="buttons">

          <button onClick={() => setLikes(likes + 1)}>
            Curtir
          </button>

          <button
            onClick={() => {
              if (likes > 0) {
                setLikes(likes - 1);
              }
            }}
          >
            Descurtir
          </button>

        </div>

      </div>

      {/* MOSTRAR TEXTO */}

      <div className="card">

        <h2>👀 Mostrar/Ocultar</h2>

        <button onClick={() => setMostrar(!mostrar)}>
          Mostrar mensagem
        </button>

        {mostrar && (
          <p className="mensagem">
            ✨ React é incrível!
          </p>
        )}

      </div>

      {/* TROCA DE COR */}

      <div className="card">

        <h2>🎨 Troca de Cor</h2>

        <button onClick={() => setDark(!dark)}>
          Mudar fundo
        </button>

      </div>

      {/* INPUT */}

      <div className="card">

        <h2>📝 Campo de Nome</h2>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <p className="welcome">
          Seja bem-vindo <strong>{nome}</strong>
        </p>

      </div>

      {/* CARREGAMENTO */}

      <div className="card">

        <h2>⏳ Simular Carregamento</h2>

        {carregando ? (
          <h3>Carregando...</h3>
        ) : (
          <h3>✅ Bem-vindo!</h3>
        )}

      </div>

    </div>
  );
}

export default App;