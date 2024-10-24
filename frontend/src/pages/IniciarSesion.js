import React, { useState } from 'react';
import axios from 'axios';
import MasterPage from './masterPage';
import '../styles/IniciarSesion.css';

function IniciarSesion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://backendobligatoriospringboot-production.up.railway.app/api/auth/login', {
        username,
        password,
      });

      
      localStorage.setItem('token', response.data.token);
      setError('');
      console.log('Inicio de sesión exitoso');

      
      window.location.href = '/dashboard'; 
    } catch (error) {
      setError('Error: Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const handleRegister = () => {
   
    window.location.href = '/register';
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
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Iniciar sesión
          </button>
          <button className="register-button" onClick={handleRegister}>
            Registrarse
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </MasterPage>
  );
}

export default IniciarSesion;

