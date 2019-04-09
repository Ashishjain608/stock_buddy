**Generation of Chart**
```<script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>```
The basic structure of object being:

```
var chart = new CanvasJS.Chart("div_element_id",{
	title :{
		text: "Stock Prediction"
	},
	axisX: {						
		title: "Attemp_#"
	},
	axisY: {						
		title: "score"
	},
	data: [{
		type: "line",
		dataPoints : dps
	}]
});
```

**Structure of datapoint object**
```
dps = [{
        x: <some_value>,
        y: <some_value>
    }, 
    {
        x: <some_value>,
        y: <some_value>
    }
    ...
]
```

**Architecture**

The current framework looks something like this.
    

        