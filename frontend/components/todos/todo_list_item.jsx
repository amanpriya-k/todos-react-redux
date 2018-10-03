import React from 'react';

const updateDone = (todo, updateTodo) => {
  todo.done ? todo.done = false : todo.done = true;
  updateTodo(todo);
};

export const TodoListItem = ({ todo, destroyTodo, updateTodo }) => (
  <li>
    <h2> {todo.title}</h2>
    <h4> {todo.body}</h4>
    <button onClick={ () => updateDone(todo, updateTodo) }>{todo.done ? "not done" : "done"}</button>
    <button onClick={ () => destroyTodo(todo) }>DESTROY</button>
  </li>

);
