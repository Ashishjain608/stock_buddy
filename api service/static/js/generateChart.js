// This file contains generateChart which takes in a parameter called dps (datapoints) and plots it using Canvas.js

function generateChart(dps, pred) {
		
	var chart = new CanvasJS.Chart("chartContainer",{
		title :{
			text: "Stock Prediction"
		},
		axisX: {						
			title: "Attemp_#"
		},
		axisY: {						
			title: "score"
		},
		data: [
            {
			type: "line",
			dataPoints : dps
			},
            {
			type: "line",
            lineColor:"red",
			dataPoints : pred
			}
        ]
    });
    
    //render the chart
    chart.render();
}