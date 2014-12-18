var igRegChart = (function () {
	var loadRegChart = function (regDataAll) {
	// variables for parsing json info
		var  showRmData = regDataAll[0].showRmRegs, ecommData = regDataAll[1].ecommRegs;
		var showRmTotal = 0;
		for (var i in showRmData){showRmTotal += showRmData[i];}
		var ecommTotal = 0;
		for (var i in ecommData){ecommTotal += ecommData[i];}
		var carsSold = 0;
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
        $('#reg-chart-container').highcharts({
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
	
    regChart(regDataAll);

	};
	return {
	load : loadRegChart
	};
	})();
