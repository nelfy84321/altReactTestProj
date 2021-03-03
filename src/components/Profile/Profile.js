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

	useEffect(() => {
		const localS = JSON.parse(window.localStorage.getItem('posts'));
		localS[user] = [...posts];
		window.localStorage.setItem('posts', JSON.stringify(localS));
	}, [posts, user]);

	function handleInputChange(event) {
		setPost(event.target.value);
	}

	const addPost = e => {
		e.preventDefault();
		let newPost = { text: post, date: Date.now(), completed: false };
		setPosts([...posts, newPost]);
		setPost('');
	};

	const delPost = el => {
		setPosts(posts.filter(elem => elem.date !== el.date));
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
