// DEPENDENCY
import { useState } from 'react'

// UTIL
export type TaskProps = Readonly<{
	id: string
	title: string
	completed: boolean
}>

function App() {
  const [ tasks, setTasks ] = useState<TaskProps[]>([
    {id: '1', title: 'Feed cat', completed: false},
    {id: '2', title: 'Play D&D', completed: true},
  ])


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

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>

      <main>
        <form>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Task name"
            autoComplete='off'
            required
          />
          <button>Add</button>
        </form>

          <section>
            {
              tasks.map(task => {
                return (
                  <div key={task.id}>
                    <input 
                      type="checkbox" 
                      id={task.id} 
                      defaultChecked={task.completed}
                      onClick={() => handleToggleTask(task.id)}
                    />
                    <label 
                      htmlFor={task.id}
                      style={{textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                      {task.title}
                      </label>
                  </div>
                )
              })
            }
          </section>
      </main>

      <footer>
        Made with 💛 by <a>Davyd Souza</a>
      </footer>
    </div>
  )
}

export default App
