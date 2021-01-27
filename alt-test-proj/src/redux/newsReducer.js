import { FETCH_NEWS, NEXT_PAGE, PREV_PAGE, SWITCH_LOADER } from './types';
import { pageStep } from './constans';

const initState = {
	news: [],
	page: 0,
	loader: false,
};

export const newsReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_NEWS:
			return { ...state, news: action.payload };

		case NEXT_PAGE:
			return { ...state, page: state.page + pageStep };

		case PREV_PAGE:
			return { ...state, page: state.page - pageStep };

		case SWITCH_LOADER:
			return { ...state, loader: !state.loader };

		default:
			return state;
	}
};
