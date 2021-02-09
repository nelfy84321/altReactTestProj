import { Component } from 'react';
import { connect } from 'react-redux';
import { login, showAlert, hideAlert } from '../../../redux/actions';
import SignUp from './SignUp';

class SignUpContainer extends Component {
	render() {
		return <SignUp login={this.props.login} showAlert={this.props.showAlert} hideAlert={this.props.hideAlert} />;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: username => dispatch(login(username)),
		showAlert: alertText => dispatch(showAlert(alertText)),
		hideAlert: () => dispatch(hideAlert()),
	};
};

export default connect(null, mapDispatchToProps)(SignUpContainer);
