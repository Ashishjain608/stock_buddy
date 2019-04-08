// This file contains generateChart which takes in a parameter called dps (datapoints) and plots it using Canvas.js

function generateChart(datapoints) {
    //length of the dataset
    let dataset_length = 80;

	//dataPoints. 
	var dps = [];  //should come from python
    var pred = []; //the predicted points

	//getting the score table
    let i = 0;
	for(i = 0; i < dataset_length; i++) {
		dps.push({x: i,y: Math.random()*50});
	}
    let index = i;
    pred.push({
        x: dps[index-1].x, y: dps[index-1].y
    });
    for(i = index; i < index + 20; i++) {
        pred.push({x: i,y: Math.random()*50});
    }
				
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