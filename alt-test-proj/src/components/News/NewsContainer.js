import React, { Component } from 'react';
import { connect } from 'react-redux';
import News from './News';
import { fetchNews, nextPage, prevPage } from './../../redux/actions';

class NewsContainer extends Component {
	componentDidMount() {
		this.props.fetchNews(this.props.page);
	}

	nextPage = async () => {
		await this.props.nextPage();
		this.props.fetchNews(this.props.page);
	};

	prevPage = async () => {
		await this.props.prevPage();
		this.props.fetchNews(this.props.page);
	};

	render() {
		return (
			<News
				news={this.props.news}
				page={this.props.page}
				loader={this.props.loader}
				nextPage={this.nextPage}
				prevPage={this.prevPage}
			/>
		);
	}
}

const mapStateToProps = state => ({
	news: state.news.news,
	page: state.news.page,
	loader: state.news.loader,
});

const mapDispatchToProps = { fetchNews, nextPage, prevPage };

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
