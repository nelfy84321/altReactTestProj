import React from 'react';
import injectSheet from 'react-jss';
import { style } from './style';

const Post = ({ title, body, userId, classes }) => {
	return (
		<div className={classes.post}>
			<div className={classes.title}>{title}</div>
			<small className={classes.author}>Author:&nbsp;{userId}</small>
			<div>{body}</div>
		</div>
	);
};

export default injectSheet(style)(Post);
