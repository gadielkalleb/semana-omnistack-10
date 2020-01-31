import React from 'react';

function App() {
  return (
    <div id="app">
      <aside>
        
        <strong>Cadastrar</strong>

        <div className="input-block">
          <label htmlFor="github_username">Usuario do github</label>
          <input name="github_username" id="github_username" type="text" required />
        </div>

        <div className="input-block"></div>

        <div className="input-group"></div>

        <div className="input-group"></div>

      </aside>
      <main></main>
    </div>
  );
}

export default App
