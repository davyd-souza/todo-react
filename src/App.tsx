// DEPENDENCY
import { useState } from 'react'

// COMPONENT
import { TodoList } from './components/TodoList'

// UTIL
import { TodoProps } from './interfaces'

const defaultFormData = {
  title: '',
  label: ''
}

function App() {

  const [ formData, setFormData ] = useState(defaultFormData)

  const [ todos, setTodos ] = useState<TodoProps[]>([
    { id: '1', title: 'Feed cat', completed: false, label: 'home' },
    { id: '2', title: 'Play D&D', completed: false, label: 'game' },
    { id: '3', title: 'Finish card', completed: true, label: 'work' },
    { id: '4', title: 'Learn pure function', completed: false, label: 'study' },
    { id: '5', title: 'Workout', completed: false},
  ])

  const labelList = ['home', 'work', 'study', 'supermarket']
  const { title, label } = formData

  const handleFormChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value
    }))
  }

  const handleNewTodo = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    setFormData(defaultFormData)

    setTodos(prevState => {
      return [
        ...prevState, 
        { 
          id: (todos.length + 1).toString(), 
          title: formData.title,
          completed: false,
          label: formData.label
        }
      ]
    })

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
        <form onSubmit={handleNewTodo}>

          <input
            type="text"
            name="title"
            id="title"
            onChange={handleFormChange}
            value={title}
            placeholder="Task name"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="label"
            id="label"
            onChange={handleFormChange}
            value={label}
            list="label-list"
            placeholder="Add a label"
          />

          <datalist id="label-list">
            {
              labelList.map(label => <option key={label} value={label}>{`@${label}`}</option>)
            }
          </datalist>

          <button type="submit">Add</button>
        </form>
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
