import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import Header from './Header';

export class HeaderContainer extends Component {
	doLogout = () => {
		window.localStorage.removeItem('user');
		this.props.logout();
	};

	render() {
		return <Header auth={this.props.auth} logout={this.doLogout} />;
	}
}

const mapStateToProps = state => ({
	auth: state.auth.auth,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
