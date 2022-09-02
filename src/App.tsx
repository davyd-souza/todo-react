// DEPENDENCY
import { useState } from 'react'

// COMPONENT
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

// UTIL
import { TodoProps } from './interfaces'

function App() {
  const [ todos, setTodos ] = useState<TodoProps[]>([
    { id: '1', title: 'Feed cat', completed: false, label: 'home' },
    { id: '2', title: 'Play D&D', completed: false, label: 'game' },
    { id: '3', title: 'Finish card', completed: true, label: 'work' },
    { id: '4', title: 'Learn pure function', completed: false, label: 'study' },
    { id: '5', title: 'Workout', completed: false},
  ])

  const addTodo = (title: string, label: string) => {
    setTodos([
      ...todos,
      {
        id: (todos.length + 1).toString(),
        title,
        completed: false,
        label
      }
    ]) 
  }

  const completeAll = (todos: TodoProps[]) => {
    const newTodos = todos.map(todo =>  {
			return { ...todo, completed: true }
		})
		setTodos(newTodos)
  }

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) return { ...todo, completed: !todo.completed }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>

      <section>
        <TodoAdd addTodo={addTodo} />
      </section>

      <TodoList 
        todos={todos}
        completeAll={completeAll}
        toggleTodo={toggleTodo}
      />

      <footer>
        Made with 💛 by <a>Davyd Souza</a>
      </footer>
    </div>
  )
}

export default App
