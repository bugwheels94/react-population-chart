import React, { Component } from "react";
import './CountryList.css';
const axios = require("axios");
class CountryList extends Component {
	state = {
		countries: []
	};
	render() {
		return (
			<ul className={`list-unstyled ${this.props.className}`}>
				{this.state.countries.map(country => (
					<li
						onClick={this.props.changeCountry.bind(null, country)}
						key={country}
						className='CountryList_option'
					>
						{country}
					</li>
				))}
			</ul>
		);
	}
	componentDidMount() {
		axios
			.get(
				`https://http-to-cors-https.herokuapp.com/api?url=${encodeURIComponent(
					"http://api.population.io:80/1.0/countries"
				)}`
			)
			.then(response => {
				// handle success
				this.props.changeCountry(response.data.countries[0])
				this.setState({
					countries: response.data.countries
				});
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}
}

export default CountryList;
