$(function () {
    
    // Registrations chart data via json
    var regDataAll = [
            {   showRegs: [20, 30, 5]
                },
            {   ecommRegs: [8, 19]
                }
        ];
		// variables for parsing json info
		
	var showRmData, ecommData, showRmTotal, ecommTotal, missedOps, carsSold;
	showRmData = regDataAll[0].showRegs;
	ecommData = regDataAll[1].ecommRegs;
	var showRmTotal = 0;
	for (var i in showRmData){showRmTotal += showRmData[i];}
	var ecommTotal = 0;
	for (var i in ecommData){ecommTotal += ecommData[i];}
	var carsSold = document.getElementById("carsSold").value;
	var missedOps = carsSold-showRmTotal;

    var colors = Highcharts.getOptions().colors,
        categories = ['Showroom', 'E-commerce', ' '], // name for Missed Oppty removed so it wouldn't show on inside circle
        data = [{
            y: showRmTotal,
            color: colors[0],
            drilldown: {
                name: 'Showroom status',
                categories: ['Showroom:<br/>Orders', 'Showroom:<br/>Still Shopping', 'Showroom:<br/>Declined'],
                data: showRmData,
                color: colors[0]
            }
        		}, {
            y: ecommTotal,
            color: colors[1],
            drilldown: {
                name: 'E-commerce status',
                categories: ['E-comm:<br/>Orders', 'E-comm:<br/>Still Shopping'],
                data: ecommData,
                color: colors[1]
            }
        }, {
            y: missedOps,
            color: colors[2],
            drilldown: {
                name: 'Missed Opportunity',
                categories: ['Missed Opportunity'],
                data: [missedOps],
                color: colors[2]
            }
        }
            ],
        sourceData = [],
        statusData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add source data
        sourceData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add status data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            statusData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    	// Registration chart
    var regChart = function (data) {
        // Create the chart
        $('#chart-container1').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Registrations'
            },
            yAxis: {
                title: {
                    text: 'Total'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
    //            valueSuffix: '%',
    //            useHTML: true
            },
            series: [{
                name: 'sources',
                data: sourceData,
                size: '50%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -45
                },
                tooltip: {
                    pointFormat: ' <b>{point.y}</b>',
                    headerFormat: ' ' //removing series name from the header so that only value shows and the Missed Oppty slice appears correctly. this way because you cannot disable on a per series basis
                }
            }, {
                name: 'Status',
                data: statusData,
    //            size: '70%',
                innerSize: '50%',
                dataLabels: {
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y : null;
                    }
                },
                tooltip: {
                    pointFormat: ' <b>{point.y}</b>' //removing series name from the header [it shows by default]
                }
            }]
        });
    };
	
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
        $('#chart-container2').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Sales Person Breakdown'
            },
            xAxis: {
//                categories: ['Tom', 'Dick', 'Harry', 'Jane', 'Joe', 'Missed']
//				type: 'category'
					categories: cats
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
                }/*,
            {   spName: "Joe2",
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
                }*/
        ];
    salesPerf(salesPerfData);
    regChart(regDataAll);
	
});
