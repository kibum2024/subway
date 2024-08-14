import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>환영합니다.</h1>
      <h1>react 개발</h1>
      <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
