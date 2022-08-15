import {createStore} from 'redux';
// import {incrementAction, decrementAction, resetAction} from './redux-service/actions/counterActions'
import counterReducer from '../src/redux-service/reducers/counterReducer'


const store = createStore(counterReducer);
export default store;