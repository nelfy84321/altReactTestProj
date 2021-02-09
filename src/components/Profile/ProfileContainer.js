import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';

export class ProfileContainer extends Component {
	render() {
		return (
			<div>
				<Profile user={this.props.user} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(ProfileContainer);
