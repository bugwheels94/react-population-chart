import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryList from './components/CountryList'
import CountryInfo from './components/CountryInfo'
class App extends Component {
	state = {
		country: ''
	}
	changeCountry = (country) => {
		this.setState({
			country: country
		})
	}
	componentDidMount(){
    document.title = "React Population Chart"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Countries Population</h1>
        </header>
        <CountryList className="col-sm-3" changeCountry={this.changeCountry}/>
        <CountryInfo country={this.state.country} className="text-center col-sm-9"/>
      </div>
    );
  }
}

export default App;
