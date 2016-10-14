import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

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
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({username: null});
				alert(arr);
			}.bind(this)
		});
	}

	componentDidMount() {
		this.getUserData();
	}

	render() {
		return(
			<div>
				<Profile userData = {this.state.userData} />
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