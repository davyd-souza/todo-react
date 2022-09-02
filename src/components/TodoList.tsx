// COMPONENT
import { TodoItem } from './TodoItem'

// UTIL
import { TodoProps } from "../interfaces"

type TodoListProps = {
	todos: TodoProps[]
	completeAll: (todos: TodoProps[]) => void
	toggleTodo: (id: string) => void
}

export function TodoList({ todos, completeAll, toggleTodo }: TodoListProps) {

	const handleCompleteAll = () => completeAll(todos)

	return (
		<>
			<ul>
				{
					todos.map( ({id, title, completed, label}) => 
						<TodoItem 
							key={id} 
							id={id}
							title={title}
							completed={completed}
							label={label}
							toggleTodo={toggleTodo}
						/>
					)
				}
			</ul>
			<button onClick={handleCompleteAll}>Mark all complete</button>
		</>

	)
}