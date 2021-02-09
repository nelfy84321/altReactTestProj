import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import injectSheet from 'react-jss';
import HeaderContainer from './components/Header/HeaderContainer';
import Homepage from './components/Homepage/Homepage';
import SigninContainer from './components/Auth/SignIn/SigninContainer';
import SignUpContainer from './components/Auth/SignUp/SignUpContainer';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
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
					<Route path="/profile">{!auth ? <Redirect to="/" /> : <ProfileContainer />}</Route>
					<Route path="/signin">{auth ? <Redirect to="/profile" /> : <SigninContainer />}</Route>
					<Route path="/signup">{auth ? <Redirect to="/" /> : <SignUpContainer />}</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default injectSheet(style)(App);
