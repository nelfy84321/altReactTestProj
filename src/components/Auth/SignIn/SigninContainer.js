import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions';
import Signin from './Signin';

class SigninContainer extends Component {
	render() {
		return <Signin login={this.props.login} />;
	}
}

const mapStateToProps = state => ({
	auth: state.auth.auth,
});

const mapDispatchToProps = dispatch => {
	return {
		login: username => dispatch(login(username)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);
