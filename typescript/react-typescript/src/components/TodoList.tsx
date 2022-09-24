import React from "react";
import { Todo } from "../todo.model";

interface TodoProps {
  items: Todo[],
  onDeleteTodo: (deleteTodo: Todo) => void
}

const TodoList: React.FC<TodoProps> = (props) => {
  return <ul>
    {props.items.map(todo => <li key={todo.id}>
      {todo.text}
      <button onClick={props.onDeleteTodo.bind(null, todo)}>DELETE</button>
    </li>)}
  </ul>
}

export default TodoList