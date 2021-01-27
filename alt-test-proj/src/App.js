import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import injectSheet from 'react-jss';
import HeaderContainer from './components/Header/HeaderContainer';
import Homepage from './components/Homepage/Homepage';
import SigninContainer from './components/Signin/SigninContainer';
import NewsContainer from './components/News/NewsContainer';
import Profile from './components/Profile/Profile';
import { style } from './style.js';

function App({ auth, classes }) {
	return (
		<div className={classes.app}>
			<BrowserRouter>
				<HeaderContainer />
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/news">
						<NewsContainer />
					</Route>
					<Route path="/profile">{!auth ? <Redirect to="/" /> : <Profile />}</Route>
					<Route path="/signin">{auth ? <Redirect to="/profile" /> : <SigninContainer />}</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default injectSheet(style)(App);
