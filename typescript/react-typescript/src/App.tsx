import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const todoAddHandler = (text: string) => {
    console.log(text)
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ])
  }

  const todoDeleteHandler = (deleteTodo: Todo) => {
    setTodos(prevTodos => [
      ...prevTodos.filter((todoItem: Todo) => todoItem !== deleteTodo)
    ])
    console.log(todos)
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
