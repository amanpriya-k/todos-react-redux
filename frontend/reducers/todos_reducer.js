import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODO:
      const newState = { [action.todo.id]: action.todo };
      return merge(newState, state);
    case RECEIVE_TODOS:
      let temp = {};
      action.todos.forEach(
        (todo) => {
          temp[todo.id] = todo;
        }
      );
      return temp;
    default:
      return state;
  }
};

export default todosReducer;
