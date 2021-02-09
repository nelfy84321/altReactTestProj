import { SHOW_ALERT, HIDE_ALERT } from './types';

const initState = {
	showAlert: false,
	alertText: '',
};

export const alertReducer = (state = initState, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return { ...state, showAlert: true, alertText: action.payload };

		case HIDE_ALERT:
			return { ...state, showAlert: false, alertText: '' };

		default:
			return state;
	}
};
