import React from 'react';
import { uniqueId } from '../../util/todos_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todo = { id: uniqueId(), title: this.state.title };
    this.props.receiveTodo(todo);
  }

  updateState() {
    return (e) => this.setState({ title: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h1>todo form</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Title
              <input type="text" onChange={this.updateState()}></input>
            </label>

              <input type='submit'></input>
          </form>
      </div>
    );
  }

}

export default TodoForm;
