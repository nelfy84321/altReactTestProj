import { LOGIN, LOGOUT } from './types';

const initState = {
	auth: false,
};

export const authReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, auth: true };

		case LOGOUT:
			return { ...state, auth: false };

		default:
			return state;
	}
};
