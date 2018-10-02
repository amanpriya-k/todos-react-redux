import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';
import { fetchTodos, createTodo, updateTodo, destroyTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
  window.updateTodo = updateTodo;
  window.destroyTodo = destroyTodo;

  const root = document.getElementById('content');
  ReactDOM.render(
    <Root store={store}/>, root);
});
