import React from 'react';

export const TodoListItem = ({ todo, destroyTodo }) => (
  <li>
    <h2> {todo.title}</h2>
    <h4> {todo.body }</h4>
    <button onClick={(event) => destroyTodo(todo)}>DESTROY</button>
  </li>

);
