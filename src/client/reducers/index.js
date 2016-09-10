import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import stations from './stations';

const rootReducer = combineReducers({
	stations: stations,
	routing: routerReducer
});

export default rootReducer;