import React, { Component } from 'react';
import CountryGraph from '../CountryGraph'
import Loader from '../../Loader'
const axios = require("axios");

class CountryInfo extends Component {
	state = {
		population: [],
		country: false,
		isFetching: false
	}
  render() {
    return (
      <div className={this.props.className}>
      	{this.props.country ? 
      		!this.state.isFetching && this.state.country ?
      			<CountryGraph data = {this.state.data} country = {this.state.country}/> : <Loader/>
      		: ''
      	}
      </div>
    );
  }
	componentDidUpdate() {
		if(!this.state.isFetching && this.state.country !== this.props.country) {
			this.setState({
				isFetching: true
			})
			axios
				.get(`https://http-to-cors-https.herokuapp.com/api?url=${encodeURIComponent(`http://api.population.io:80/1.0/population/2017/${this.props.country.split('/')[0]}`)}`)
				.then(response => {
					// handle success
					this.setState({
						country: this.props.country,
						data: response.data,
						isFetching: false
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
}

export default CountryInfo;
