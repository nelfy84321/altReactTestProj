import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './redux/actions';
import App from './App';

class AppContainer extends Component {
	componentDidMount() {
		window.localStorage.getItem('user') && this.props.login();
	}

	render() {
		return <App auth={this.props.auth} />;
	}
}

const mapStateToProps = state => ({
	auth: state.auth.auth,
});

export default connect(mapStateToProps, { login })(AppContainer);
