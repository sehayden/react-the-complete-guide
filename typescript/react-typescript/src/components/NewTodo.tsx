import React, { FormEvent, useRef } from "react";

interface NewTodoProp {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProp> = (props) => {
  const textInputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    //console.log(textInputRef.current.value)
    props.onAddTodo(textInputRef.current.value)
  }
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo text</label>
        <input ref={textInputRef} id="todo-text"></input>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo;