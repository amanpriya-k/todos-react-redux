export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
<<<<<<< HEAD
export const REMOVE_TODO = 'REMOVE_TODO';

import * as TodoApiUtil from '../util/todo_api_util';
import {receiveErrors} from './error_actions';
=======
>>>>>>> 9d60c20955123ea5fe2e066c3f61d89c5e006bf3

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

<<<<<<< HEAD
export const receiveTodo = (todo) => {
  return { type: RECEIVE_TODO,
  todo };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const destroyTodo = (todo) => (dispatch) => {
  return TodoApiUtil.removeTodo(todo)
    .then( (todo) => dispatch(removeTodo(todo)),
           (error) => dispatch(receiveErrors(error.responseJSON)) );
};


export const updateTodo = (todo) => (dispatch) => {
  return TodoApiUtil.updateTodo(todo)
      .then(
        todo => dispatch(receiveTodo(todo)),
        error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const fetchTodos = () => (dispatch) => {
  return TodoApiUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = (todo) => (dispatch) => {
  return TodoApiUtil.createTodo(todo)
         .then(
           todo => dispatch(receiveTodo(todo)),
           error => dispatch(receiveErrors(error.responseJSON))

         );
};
=======
export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});
>>>>>>> 9d60c20955123ea5fe2e066c3f61d89c5e006bf3
