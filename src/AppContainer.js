import { Component } from 'react';
import { connect } from 'react-redux';
import { login, hideAlert } from './redux/actions';
import App from './App';

class AppContainer extends Component {
	componentDidMount() {
		window.localStorage.getItem('user') && this.props.login();
	}

	render() {
		return <App auth={this.props.auth} alert={this.props.alert} alertText={this.props.alertText} hideAlert={this.props.hideAlert}/>;
	}
}

const mapStateToProps = state => ({
	auth: state.auth.auth,
	alert: state.alert.showAlert,
	alertText: state.alert.alertText
});

const mapDispatchToProps = dispatch => {
	return {
		login: username => dispatch(login(username)),
		hideAlert: () => dispatch(hideAlert()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
