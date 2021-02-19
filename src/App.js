import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import injectSheet from 'react-jss';
import HeaderContainer from './components/Header/HeaderContainer';
import Homepage from './components/Homepage/Homepage';
import SigninContainer from './components/Auth/SignIn/SigninContainer';
import SignUpContainer from './components/Auth/SignUp/SignUpContainer';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Alert from './components/Alert/Alert';
import { style } from './style.js';

function App({ auth, alert, alertText, hideAlert, classes }) {
	return (
		<div className={classes.app}>
			<HashRouter>
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
				{alert && <Alert text={alertText} closeFunc={() => hideAlert()} />}
			</HashRouter>
		</div>
	);
}

export default injectSheet(style)(App);
