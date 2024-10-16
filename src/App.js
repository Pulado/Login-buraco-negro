import React, { useState, useEffect } from 'react';
import './App.css';

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 500; i++) {
    const style = {
      position: 'absolute',
      top: `${Math.random() * 99.5}%`,
      left: `${Math.random() * 99.5}%`,
      width: '1.5px',
      height: '1.5px',
      backgroundColor: 'white',
      animation: 'blink 1s infinite',
      animationDelay: `${Math.random() * 2}s`,
    };
    stars.push(<div key={i} style={style}></div>);
  }
  return stars;
};

const CombinedComponent = () => {
  const [stars, setStars] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setStars(generateStars());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login: ', username, password);
    

    window.location.href = 'https://buraconegro.vercel.app/';
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {stars}
      <div className="pulsing-ball"></div>
      <form onSubmit={handleSubmit} className="rectangle">
        <div className="square red">
          <h2 className="title">Login</h2>
        </div>
        <div className="square pink">
          <div className="inputGroup">
            <label className="label" htmlFor="username"></label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required
              placeholder="E-mail ou Usuário"
            />
          </div>
        </div>
        <div className="square orange">
          <div className="inputGroup">
            <label className="label" htmlFor="password"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="brown-rectangle">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Lembre de mim</label>
        </div>
        <div className="square purple">
          <div className="botao">
            <button type="submit" className="button">
              Entrar
            </button>
          </div>
        </div>
        <div className="square blue">
          <a href="/forgot-password" className="link">
            Esqueceu a senha?
          </a>
        </div>
        <div className="square yellow">
          <a href="https://registroburaconegro.vercel.app/" className="link">
            Registrar-se
          </a>
        </div>
      </form>
    </div>
  );
};

export default CombinedComponent;
