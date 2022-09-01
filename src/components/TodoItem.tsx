type TodoItemProps = {
	id: string
	title: string
	completed: boolean
	label?: string
	toggleTodo: (id: string) => void
}

export function TodoItem({id, title, completed, label, toggleTodo}: TodoItemProps) {
	
	const handleToggleTodo = () => toggleTodo(id)
	
	return (
		<li>
			<input 
				type="checkbox"
				id={id}
				checked={completed}
				onChange={() => handleToggleTodo()}
			/>
			<label htmlFor={id} style={{textDecoration: completed ? 'line-through' : 'none' }}>
				{title}
			</label>

			<label htmlFor={id}>
				{ label && ` @${label}` }
			</label>
		</li>
	)
}