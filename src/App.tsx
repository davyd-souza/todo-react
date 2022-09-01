// DEPENDENCY
import { useState } from 'react'

// UTIL
type TaskProps = Readonly<{
	id: string
	title: string
	completed: boolean
  label?: string
}>

type TaskCompletedProps = TaskProps & Readonly<{
	completed: true
}>

const defaultFormData = {
  title: '',
  label: ''
}

function App() {
  const [ formData, setFormData ] = useState(defaultFormData)
  const [ tasks, setTasks ] = useState<TaskProps[]>([
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

  const handleNewTask = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    setFormData(defaultFormData)

    setTasks(prevState => {
      return [
        ...prevState, 
        { 
          id: (tasks.length + 1).toString(), 
          title: formData.title,
          completed: false,
          label: formData.label
        }
      ]
    })

  }

  const handleToggleTask = (id: string) => {
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task
    })
    
    setTasks(newTasks)
  }

  const handleCompleteAll = () => {
    const newTasks = tasks.map(task => completeAll(task))
    setTasks(newTasks)
  }


  const completeAll = (task: TaskProps): TaskCompletedProps => {
    return { ...task, completed: true}
  }


  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>

      <main>
        <form onSubmit={handleNewTask}>

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

          <section>
            <ul>
              {
                tasks.map(task => {
                  return (
                    <li key={task.id}>
                      <input 
                        type="checkbox" 
                        id={task.id} 
                        checked={task.completed}
                        onChange={() => handleToggleTask(task.id)}
                      />
                      <label htmlFor={task.id} style={{textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                      </label>

                      <label htmlFor={task.id}>
                        { task.label && ` @${task.label}` }
                      </label>
                    </li>
                  )
                })
              }
            </ul>

            <button onClick={handleCompleteAll}>Mark all complete</button>
          </section>
      </main>

      <footer>
        Made with 💛 by <a>Davyd Souza</a>
      </footer>
    </div>
  )
}

export default App
