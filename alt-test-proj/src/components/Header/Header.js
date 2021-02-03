import React from 'react';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';
import { Button } from '@material-ui/core';
import { style } from './style';

const Header = ({ auth, logout, classes }) => {
	return (
		<header className={classes.header}>
			<Button variant="contained" onClick={logout} className={classes.logoutBtn}>
				Loguot
			</Button>
			<h1 className={classes.title}>My application</h1>
			<nav className={classes.navbar}>
				<NavLink exact to="/" className={classes.link} activeClassName={classes.active}>
					Home
				</NavLink>
				<NavLink to="/news" className={classes.link} activeClassName={classes.active}>
					News
				</NavLink>
				{auth ? (
					<NavLink to="/profile" className={classes.link} activeClassName={classes.active}>
						Profile
					</NavLink>
				) : (
					<NavLink to="/signin" className={classes.link} activeClassName={classes.active}>
						<Button variant="contained">Sign In</Button>
					</NavLink>
				)}
			</nav>
		</header>
	);
};

export default injectSheet(style)(Header);
