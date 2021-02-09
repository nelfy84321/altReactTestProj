import { Component } from 'react';
import { connect } from 'react-redux';
import { login, showAlert, hideAlert } from '../../../redux/actions';
import Signin from './Signin';

class SigninContainer extends Component {
	render() {
		return <Signin login={this.props.login} showAlert={this.props.showAlert} hideAlert={this.props.hideAlert} />;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: username => dispatch(login(username)),
		showAlert: alertText => dispatch(showAlert(alertText)),
		hideAlert: () => dispatch(hideAlert()),
	};
};

export default connect(null, mapDispatchToProps)(SigninContainer);
