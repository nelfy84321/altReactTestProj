export const fetchNews = page => {
	return async dispatch => {
		dispatch({ type: 'SWITCH_LOADER' });
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`);
		const json = await response.json();
		dispatch({ type: 'FETCH_NEWS', payload: json });
		dispatch({ type: 'SWITCH_LOADER' });
	};
};

export const login = username => {
	return {
		type: 'LOGIN',
		payload: username,
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT',
	};
};

export const nextPage = () => {
	return {
		type: 'NEXT_PAGE',
	};
};

export const prevPage = () => {
	return {
		type: 'PREV_PAGE',
	};
};
