import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'SatishJunghare',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	// Get user data from github
	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userData: data});
			}.bind(this),
			error: function(xhr, status, arr) {
				this.setState({username: null});
				alert(arr);
			}.bind(this)
		});
	}

	// Get user repos from github
	getUserRepos() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.per_page+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, arr) {
				this.setState({username: null});
				alert(arr);
			}.bind(this)
		});
	}

	handleFormSubmit(username) {
		this.setState({username:username}, function() {
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	render() {
		return(
			<div>
				<Search onFormSubmit={this.handleFormSubmit.bind(this)} />
				<Profile {...this.state} />
			</div>
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps = {
	clientId: 'b4aea6e3b41de7b1f5b2',
	clientSecret: 'ce818df6e1d2391e14ba6cd5c2921f70c0ff0377'
}

export default App