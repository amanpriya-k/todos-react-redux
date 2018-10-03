import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render(){
    return(
      <div>
        <TodoForm createTodo={this.props.createTodo} errors={this.props.errors}/>
        <h1>Todo list here</h1>
        <ul>
          { this.props.todos.map(
            (todo) => <TodoListItem
              key={todo.id}
              todo={todo}
              destroyTodo={this.props.destroyTodo}
              updateTodo={this.props.updateTodo}/>
          ) }
        </ul>
      </div>
    );
  }
}

export default TodoList;
