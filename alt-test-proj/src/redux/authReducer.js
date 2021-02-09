import { LOGIN, LOGOUT } from './types';

const initState = {
	auth: false,
	user: '',
};

export const authReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, auth: true, user: action.payload };

		case LOGOUT:
			return { ...state, auth: false, user: '' };

		default:
			return state;
	}
};
