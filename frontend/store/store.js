import {createStore} from 'redux';
import {rootReducer} from '../reducers/root_reducer';

export function configureStore() {
  // debugger
  return createStore(rootReducer);
}

// export default configureStore;
