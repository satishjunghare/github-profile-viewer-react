import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
	render() {
		return(
			<div>
				{this.state.username}
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