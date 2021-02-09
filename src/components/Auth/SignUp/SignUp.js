import React, { useState } from 'react';
import { style } from '../style';
import injectSheet from 'react-jss';

function SignUp({ login, showAlert, hideAlert, classes }) {
	const [formData, setFormData] = useState({ login: '', password: '', confirmPassword: '' });

	const handleInputChange = event => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const signUp = e => {
		e.preventDefault();
		let info = JSON.parse(localStorage.getItem('users')) || {};
		let infoKeys = Object.keys(info);
		if (formData.password !== formData.confirmPassword) {
			showAlert('Your password and confirmation password do not match');
			setTimeout(() => hideAlert(), 2000);
		} else if (infoKeys.some(element => element === formData.login)) {
			showAlert('Username is already taken');
			setTimeout(() => hideAlert(), 2000);
		} else {
			info[formData.login] = formData;
			localStorage.setItem('users', JSON.stringify(info));
			localStorage.setItem('user', JSON.stringify(formData));
			login(formData.login);
		}
	};

	return (
		<div className={classes.wrapper}>
			<form className={classes.form} onSubmit={signUp}>
				<h4 className={classes.title}>Please enter your info for registration</h4>
				<input
					type="text"
					name="login"
					value={formData.login}
					onChange={handleInputChange}
					className={classes.input}
					placeholder="Login"
					required
				/>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					className={classes.input}
					placeholder="Password"
					required
				/>
				<input
					type="password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleInputChange}
					className={classes.input}
					placeholder="Confirm Password"
					required
				/>
				<input value="Sign up" type="submit" className={classes.input} />
			</form>
		</div>
	);
}

export default injectSheet(style)(SignUp);
