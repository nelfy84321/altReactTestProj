import React from 'react';
import injectSheet from 'react-jss';
import { style } from './style.js';

const Alert = ({ text, closeFunc, classes }) => {
	return (
		<div className={classes.alert}>
			<span className={classes.text}>{text}</span>
			<button onClick={closeFunc} className={classes.closeButton}>
				&times;
			</button>
		</div>
	);
};

export default injectSheet(style)(Alert);
