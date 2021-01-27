import React from 'react';

const Homepage = () => {
	return (
		<>
			<h3>About the app</h3>
			<p>This application is a SPA that has the following pages:</p>
			<ul>
				<li>“/ ” - the main page, which contains information about the application.</li>
				<li>“/news” - a page with news, which are loaded from the jasonplaceholder. Pagination works.</li>
				<li>
					“/login” - a page on which you can log in to the system to access the page that is closed from unauthorized
					users (use fake data: login: Admin, password: 12345). If an authorized user tries to visit this pages, a
					redirect to the profile page will work.
				</li>
				<li>
					“/profile” - a page that closed from unauthorized users. App will redirect the user to homepage if an
					unauthorized user tries to enter to this page.
				</li>
			</ul>
			<br />
			The correctness of the username and password on the login page is checked.
			<br />
			All information about user is stored in localStorage.
			<br />
			<p>Stack: react, react-router, redux, redux-thunk, react hooks, jss.</p>
		</>
	);
};

export default Homepage;
