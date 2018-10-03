import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import {fetchTodos, createTodo, destroyTodo, updateTodo} from '../../actions/todo_actions';
// import errorReducer from '../../reducers/error_reducer';


const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  destroyTodo: (todo) => dispatch(destroyTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
