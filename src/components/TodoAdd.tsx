// DEPENDENCY
import { useState } from 'react'

// UTIL
type TodoAddProps = {
	addTodo: (title: string, label: string) => void
}

const defaultFormData = {
  title: '',
  label: ''
}

export function TodoAdd({ addTodo }: TodoAddProps) {
  const [ formData, setFormData ] = useState(defaultFormData)

	const { title, label } = formData
  const labelList = ['home', 'work', 'study', 'supermarket']

	const handleFormChange = (evt: React.ChangeEvent<HTMLInputElement>) => {		
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value
    }))
  }

	const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()		
    setFormData(defaultFormData)
		addTodo(formData.title, formData.label)
  }

	return (
		<form onSubmit={handleFormSubmit}>

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
	)
}