import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
        <h1>Todo list here</h1>
        <ul>
          { this.props.todos.map(
            (todo) => <TodoListItem key={todo.id} todo={todo}/>
          ) }
        </ul>
      </div>
    );
  }
}

export default TodoList;
