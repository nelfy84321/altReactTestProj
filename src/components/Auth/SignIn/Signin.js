import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import Alert from '../../Alert/Alert';
import { style } from '../style';

const Signin = ({ login, classes }) => {
	const [authData, setAuthData] = useState({ login: '', password: '' });
	const [alertShowing, setAlertShowing] = useState({ text: '', showing: false });

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
			setAlertShowing({ ...alertShowing, text: 'Wrong username or password', showing: true });
			setTimeout(() => setAlertShowing(false), 2000);
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

			{alertShowing.showing && (
				<Alert text={alertShowing.text} closeFunc={() => setAlertShowing({ ...alertShowing, showing: false })} />
			)}
		</section>
	);
};

export default injectSheet(style)(Signin);
