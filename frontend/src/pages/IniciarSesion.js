import React, { useState } from 'react';
import MasterPage from './masterPage';
import '../styles/IniciarSesion.css';

function IniciarSesion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Iniciar sesión con:', { username, password });
  };

  const handleRegister = () => {
    console.log('Redirigir a página de registro');
  };

  return (
    <MasterPage>
      <div className="login-container">
        <div className="login-card">
          <div className="login-icon">
            <span role="img" aria-label="user">👤</span>
          </div>
          <div className="login-inputs">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Iniciar sesion
          </button>
          <button className="register-button" onClick={handleRegister}>
            Registrarse
          </button>
        </div>
      </div>
    </MasterPage>
  );
}

export default IniciarSesion;
