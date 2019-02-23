import React from 'react';

class SearchBar extends React.Component {

	state = { term: '' };

	onInputChange = e => { this.setState({ term : e.target.value })};
	onInputSubmit = e => { e.preventDefault(); this.props.onFormSubmit(this.state.term)};

	render() {
		return (
			<div className="ui segment search_bar">
				<form onSubmit={this.onInputSubmit} className="ui form">
					<label htmlFor="SearchBar">Video Search:</label>
					<input 
						id="SearchBar" 
						type="text" 
						value={this.state.term}
						onChange={this.onInputChange}
					/>
				</form>
			</div>
		);
	};
}

export default SearchBar;