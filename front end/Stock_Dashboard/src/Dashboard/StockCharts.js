import React from 'react';
import { VictoryLine, VictoryBar, VictoryLegend, VictoryGroup, VictoryChart, VictoryZoomContainer, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory';

class StockCharts extends React.Component{
    constructor(props) {
        super(props)
        this.state = { 
            chartData: []
         }
    }

    render() {
		if(this.state.chartData.length === 0) {
			return null;
		}
		return(
			<div>
		<VictoryChart theme={VictoryTheme.material} height={700} width={1300} scale={{x: "time", y: "linear"}} domainPadding={10}
		containerComponent={
			<VictoryZoomContainer zoomDomain={{x: [0, 10]}} />
		  }
		>
			<VictoryLegend x={125} y={50}
				title="Historical Infosys Stock Value"
				centerTitle
				orientation="horizontal"
				gutter={20}
				style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
				data={[
				{ name: "Average Price", symbol: { fill: "blacl" } },
				{ name: "Open Price", symbol: { fill: "green" } },
				]}
				/>
			<VictoryAxis
				label="Date" height={10}
				axisLabelComponent={<VictoryLabel dy={20}/>}
				tickFormat={ t => {
					let d = new Date(t)
					return (
					  d.toLocaleDateString()
					)
				  }}
				  style={{
					axis: {
					  stroke: "#ddd"
					},
					grid: {
					  stroke: "rgba(0, 0, 0, 0.05)"
					},
					tickLabels: {
					  fontSize: 5,
					  fill: "#919497"
					}
				  }} 
			/>
			<VictoryAxis
				dependentAxis
				
				style={{
					axis: {
					  stroke: "#ddd"
					},
					grid: {
					  stroke: "rgba(0, 0, 0, 0.05)"
					},
					tickLabels: {
					  fontSize: 3,
					  fill: "#919497"
					}
				  }} 
				label="Average Value"
				axisLabelComponent={<VictoryLabel dy={-25}/>}
			/>
			<VictoryGroup offset={20}
    			colorScale={"qualitative"}>
  			<VictoryLine data={this.state.chartData} x='Date' y='Average Price'
				style={{
					data: {
					  stroke: "#434546",
					  strokeWidth: 1
					}
				  }}
				/>
			<VictoryLine data={this.state.chartData} x='Date' y='Open Price'
				/>
			</VictoryGroup>
		</VictoryChart>
		</div>
		)
    }
    
    componentDidMount(){
		fetch('http://localhost:8085/visualize')
		.then(function(response) {
			return response.json();
		})
		.then(data => {
			let dataPoints = []
			for (var i = 0; i < 50; i++) {
				dataPoints.push({
					Date: data[i].Date,
					"Average Price": +data[i]["Average Price"],
					"Open Price": +data[i]["Open Price"]
				});
			}
			this.setState({
				chartData: dataPoints
			})
		});
	}


}

export default StockCharts; 