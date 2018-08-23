import React, { Component } from "react";
var BarChart = require("react-chartjs-2").Bar;

export default class CountryGraph extends Component {
	render() {
		return (
			<BarChart
				options={{
					responsive: true,
					maintainAspectRatio: true,
					scales: {
				    yAxes: [{
				      scaleLabel: {
				        display: true,
				        labelString: 'Population'
				      }
				    }]
				  },
					scales: {
				    xAxes: [{
				      scaleLabel: {
				        display: true,
				        labelString: 'Age Group'
				      }
				    }],
				    yAxes: [{
				      scaleLabel: {
				        display: true,
				        labelString: 'Population'
				      }
				    }]
				  },
					title: {
	            display: true,
	            text: this.props.country
	        }
 				}}
				data={this.transformData()}
			/>
		);
	}
	transformData() {
		const d = this.props.data;

		return {
			labels: d
				.filter(record => record.age % 10 === 0)
				.map(record => `${record.age} - ${record.age + 10}`),
			datasets: [
				{
					label: this.props.country,
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					label: "Population By Age Group",
					borderWidth: 1,
					data: d.reduce((acc, c) => {
						acc[Math.floor(c.age / 10)] = acc[Math.floor(c.age / 10)] || 0;
						acc[Math.floor(c.age / 10)] += c.total;
						return acc;
					}, [])
				}
			]
		};
	}
}
