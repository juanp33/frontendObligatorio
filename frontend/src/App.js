import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://backendobligatorio-de6eeb5df337.herokuapp.com/check-db')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.text();
      })
      .then(data => setMessage(data))
      .catch(error => setMessage('Error al conectar con el backend: ' + error.message));
  }, []);

  return (
    <div>
      <h1>Conexión con el Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
