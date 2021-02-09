import React, { useState, useEffect } from 'react';
import { style } from './style';
import injectSheet from 'react-jss';

function Profile({ user, classes }) {
	const [post, setPost] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('posts'))) {
			localStorage.setItem('posts', '{}');
		}
		let generalPostList = JSON.parse(localStorage.getItem('posts'));
		let myPostList = generalPostList[user];
		myPostList && setPosts(myPostList);
	}, [user]);

	function handleInputChange(event) {
		setPost(event.target.value);
	}

	const addPost = e => {
		e.preventDefault();
		debugger;
		let posts = JSON.parse(localStorage.getItem('posts'));
		if (!posts[user]) posts[user] = [];
		posts[user].push({ text: post, date: Date.now(), completed: false });
		localStorage.setItem('posts', JSON.stringify(posts));
		setPosts(posts[user]);
		setPost('');
	};

	const delPost = el => {
		let posts = JSON.parse(localStorage.getItem('posts'));
		posts[user] = posts[user].filter(elem => elem.date !== el.date);
		localStorage.setItem('posts', JSON.stringify(posts));
		setPosts(posts[user]);
	};

	return (
		<>
			<form className={classes.form} onSubmit={addPost}>
				<input
					type="text"
					value={post}
					name="post1"
					placeholder="Enter your post"
					autoComplete="off"
					className={classes.field}
					onChange={handleInputChange}
				/>
				<input type="submit" className={classes.addBtn} value="Add" />
			</form>
			{posts.map(e => (
				<div className={classes.post} key={e.date}>
					<div>{e.text}</div>
					<button className={classes.crossBtn} onClick={() => delPost(e)}>
						&times;
					</button>
				</div>
			))}
		</>
	);
}

export default injectSheet(style)(Profile);
