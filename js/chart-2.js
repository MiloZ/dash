$(function () {
    
//    var colors = Highcharts.getOptions().colors,
//        categories = ['Showroom', 'E-commerce', ' '], // name for Missed Oppty removed so it wouldn't show on inside circle
//        data = [{
//            y: 55,
//            color: colors[0],
//            drilldown: {
//                name: 'Showroom status',
//                categories: ['Showroom:<br/>Orders', 'Showroom:<br/>Still Shopping', 'Showroom:<br/>Declined'],
//                data: [20, 30, 5],
//                color: colors[0]
//            }
//        }, {
//            y: 27,
//            color: colors[1],
//            drilldown: {
//                name: 'E-commerce status',
//                categories: ['E-comm:<br/>Orders', 'E-comm:<br/>Still Shopping'],
//                data: [8, 19],
//                color: colors[1]
//            }
//        }, {
//            y: 8,
//            color: colors[2],
//            drilldown: {
//                name: 'Missed Opportunity',
//                categories: ['Missed Opportunity'],
//                data: [8],
//                color: colors[2]
//            }
//        }
//            ],
//        sourceData = [],
//        statusData = [],
//        i,
//        j,
//        dataLen = data.length,
//        drillDataLen,
//        brightness;


    // Build the data arrays
//    for (i = 0; i < dataLen; i += 1) {

        // add source data
//        sourceData.push({
//            name: categories[i],
//            y: data[i].y,
//            color: data[i].color
//        });

        // add status data
//        drillDataLen = data[i].drilldown.data.length;
//        for (j = 0; j < drillDataLen; j += 1) {
//            brightness = 0.2 - (j / drillDataLen) / 5;
//            statusData.push({
//                name: data[i].drilldown.categories[j],
//                y: data[i].drilldown.data[j],
//                color: Highcharts.Color(data[i].color).brighten(brightness).get()
//            });
//        }
//    }
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
            data: [{
                y: 55,
                color: colors[0],
                name: 'Showroom status',
                    categories: ['Showroom:<br/>Orders', 'Showroom:<br/>Still Shopping', 'Showroom:<br/>Declined'],
                    data: [20, 30, 5],
                    color: colors[0]
            }, {
                y: 27,
                color: colors[1],
                    name: 'E-commerce status',
                    categories: ['E-comm:<br/>Orders', 'E-comm:<br/>Still Shopping'],
                    data: [8, 19],
                    color: colors[1]
            }, {
                y: 8,
                color: colors[2],
                    name: 'Missed Opportunity',
                    categories: ['Missed Opportunity'],
                    data: [8],
                    color: colors[2]
            }],
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
                pointFormat: ' <b>{point.y}</b>' //removing series name from the header
            }
        }]
    });
    $('#chart-container2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Sales Person Breakdown'
        },
        xAxis: {
            categories: ['Tom', 'Dick', 'Harry', 'Jane', 'Joe', 'Missed']
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
            width: 250
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Shopping',
            data: [5, 3, 4, 7, 2, 0]
        }, {
            name: 'In Process',
            data: [2, 2, 3, 2, 1, 0]
        }, {
            name: 'Fulfilled',
            data: [3, 4, 4, 2, 5, 0]
        }, {
            name: 'Declined',
            data: [1, 2, 2, 3, 4, 0]
        }, {
            name: 'Missed Opportunities',
            data: [0, 0, 0, 0, 0, 6]
        }]
    });
});

