import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions';
import SignUp from './SignUp';

export class SignUpContainer extends Component {
	render() {
		return <SignUp login={this.props.login} />;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: username => dispatch(login(username)),
	};
};

export default connect(null, mapDispatchToProps)(SignUpContainer);
