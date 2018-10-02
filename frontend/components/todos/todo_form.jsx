import React from 'react';
import { uniqueId } from '../../util/todos_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      // let todo = { id: uniqueId(), title: this.state.title, body: this.state.body };
      let todo = { title: this.state.title, body: this.state.body };
      this.props.createTodo(todo)
          .then( () => this.setState({title: '', body: ''}));
          // .then( () => );
  }

  updateStateTitle() {
    return (e) => this.setState({ title: e.currentTarget.value });
  }

  updateStateBody() {
    return (e) => this.setState({ body: e.currentTarget.value });
  }

  handleErrors() {
    return this.props.errors;
  }

  render() {
    return (
      <div>
        <h3> {this.handleErrors()} </h3>
        <h1>todo form</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Title
              <input type="text" onChange={this.updateStateTitle()} value={this.state.title}></input>
            </label>
            <label>Body
              <input type="text" onChange={this.updateStateBody()} value={this.state.body}></input>
            </label>

              <input type='submit'></input>
          </form>
      </div>
    );
  }

}

export default TodoForm;
