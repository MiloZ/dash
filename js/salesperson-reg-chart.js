  
$(function () {
	'use strict';
     // Sales Performance chart
    
	var salesPerf = function (data) {
		// variables for parsing json info
		var cats = [];
		for (var i = 0, max = salesPerfData.length; i < max; i++)
	{
		cats.push(salesPerfData[i].spName);
	};
		var shopData = [];
		for (var i = 0, max = salesPerfData.length; i < max; i++)
	{
		shopData.push(salesPerfData[i].spPerf[0]);
	};
		var procData = [];
		for (var i = 0, max = salesPerfData.length; i < max; i++)
	{
		procData.push(salesPerfData[i].spPerf[1]);
	};
		var fillData = [];
		for (var i = 0, max = salesPerfData.length; i < max; i++)
	{
		fillData.push(salesPerfData[i].spPerf[2]);
	};
		var declData = [];
		for (var i = 0, max = salesPerfData.length; i < max; i++)
	{
		declData.push(salesPerfData[i].spPerf[3]);
	};
		// Begin chart
        $('#salesperson-reg-chart-container').highcharts({
            chart: {
                type: 'bar',
				height: 700 /*if height is set higher and overflow on containing div set to auto the chart will not shrink so much vertically when there are many salespeople. need to make height value based on number of people */
            },
            title: {
                text: 'Sales Person Breakdown'
            },
            xAxis: {
//                categories: ['Tom', 'Dick', 'Harry', 'Jane', 'Joe', 'Missed']
//				type: 'category'
				categories: cats,
				labels: {step: 1}
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Registrations'
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true,
                width: 220
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Shopping',
                data: shopData
            }, {
                name: 'In Process',
                data: procData
            }, {
                name: 'Fulfilled',
                data: fillData
            }, {
                name: 'Declined',
                data: declData
            }]
        });
    };
    
    // Sales Performance chart data
    var salesPerfData = [
            {   spName: "Tom",
			 	spPerf: [4, 3, 4, 2]
                },
            {   spName: "Dick",
				spPerf: [3, 2, 4, 2]
                },
            {   spName: "Harry",
				spPerf: [4, 3, 4, 5]
                },
            {   spName: "Jane",
				spPerf: [7, 2, 2, 3]
                },
            {   spName: "Joe",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe2", /*adding extra Joe's to test what adding more people does to the chart*/
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe3",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe4",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe5",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe6",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe7",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe8",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe9",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe1",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe3",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe4",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe5",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe6",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe7",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe8",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe9",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe1",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe3",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe4",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe5",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe6",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe7",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe8",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe9",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe1",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe3",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe4",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe5",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe6",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe7",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe8",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe9",
				spPerf: [2, 1, 5, 4]
                },
            {   spName: "Joe1",
				spPerf: [2, 1, 5, 4]
                }
        ];
    salesPerf(salesPerfData);
	
});
