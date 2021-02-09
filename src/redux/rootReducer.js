import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { authReducer } from './authReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
	news: newsReducer,
	auth: authReducer,
	alert: alertReducer,
});
