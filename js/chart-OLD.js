$(function () {

    // Build the chart
        $('#chart-container1').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Overall Orders'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: false,
                    center: ['50%','50%']
                }
            },
            series: [{
//                type: 'pie',
                name: 'Order Source',
                data: [
                    ['Showroom', 45],
                    ['E-commerce', 26],
                    ['Missed', 6]
                   
                ],
                size: '60%'
            }, {
//                type: 'pie',
                name: 'Order Status',
                data: [
                    ['Shopping', 40],
                    ['Declined', 8],
                    ['Missed', 6]
                ],
                size: '80%',
                innerSize: '60%'
            }]
        });
    $('#chart-container2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Registration breakdown'
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

