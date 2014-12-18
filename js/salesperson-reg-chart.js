var igSalesChart = (function () {
	var loadSalesChart = function (salesPerfDataAll) {
	
     // Sales Performance chart
    
	var salesPerf = function (data) {
		// variables for parsing json info
		var cats = [];
		for (var i = 0, max = salesPerfDataAll.length; i < max; i++)
	{
		cats.push(salesPerfDataAll[i].spName);
	};
		var shopData = [];
		for (var i = 0, max = salesPerfDataAll.length; i < max; i++)
	{
		shopData.push(salesPerfDataAll[i].spPerf[0]);
	};
		var procData = [];
		for (var i = 0, max = salesPerfDataAll.length; i < max; i++)
	{
		procData.push(salesPerfDataAll[i].spPerf[1]);
	};
		var fillData = [];
		for (var i = 0, max = salesPerfDataAll.length; i < max; i++)
	{
		fillData.push(salesPerfDataAll[i].spPerf[2]);
	};
		var declData = [];
		for (var i = 0, max = salesPerfDataAll.length; i < max; i++)
	{
		declData.push(salesPerfDataAll[i].spPerf[3]);
	};
		// Begin chart
        $('#salesperson-reg-chart-container').highcharts({
            chart: {
                type: 'bar'/*,
				height: 700*/ /*if height is set higher and overflow on containing div set to auto the chart will not shrink so much vertically when there are many salespeople. need to make height value based on number of people */
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
    

    salesPerf(salesPerfDataAll);
	
};
	return {
	load : loadSalesChart
	};
	})();