import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { style } from '../style';

const Signin = ({ login, showAlert, hideAlert, classes }) => {
	const [authData, setAuthData] = useState({ login: '', password: '' });

	const handleInputChange = event => {
		setAuthData({
			...authData,
			[event.target.name]: event.target.value,
		});
	};

	const checkAuthData = e => {
		e.preventDefault();
		let info = JSON.parse(localStorage.getItem('users')) ?? {};
		if (info[authData.login] && info[authData.login].password === authData.password) {
			localStorage.setItem('user', JSON.stringify(authData));
			login(authData.login);
		} else {
			showAlert('Wrong username or password');
			setTimeout(() => hideAlert(), 2000);
		}
	};

	return (
		<section className={classes.wrapper}>
			<form className={classes.form} onSubmit={checkAuthData}>
				<h4 className={classes.title}>Please Login</h4>
				<input
					type="text"
					name="login"
					value={authData.login}
					onChange={handleInputChange}
					className={classes.input}
					placeholder="Login"
					required
				/>
				<input
					type="password"
					name="password"
					value={authData.password}
					onChange={handleInputChange}
					className={classes.input}
					placeholder="Password"
					required
				/>
				<input value="Log in" type="submit" className={classes.input} />
			</form>
			<Link to="/signup" className={classes.link}>
				Sign up
			</Link>
		</section>
	);
};

export default injectSheet(style)(Signin);
