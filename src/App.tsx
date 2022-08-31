function App() {

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>

      <main>
        <form>
          <input 
            type="text"
            placeholder="Task name"
            required
          />
          <button type="submit">Add</button>
        </form>

          <div>
            <input type="checkbox" id="todo-item" />
            <label htmlFor="todo-item">Feed cat</label>
          </div>
      </main>

      <footer>
        Made with 💛 by <a>Davyd Souza</a>
      </footer>
    </div>
  )
}

export default App
