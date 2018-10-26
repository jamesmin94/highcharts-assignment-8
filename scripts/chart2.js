
// Create the chart
Highcharts.chart('chart2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Government consumption expenditures and gross investment in 2018 - Q1 '
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Billons of Dollors'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '${point.y:.2f} B'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f} billion<br/>'
    },

    "series": [
        {
            "name": "Sections",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Federal",
                    "y": 1294.8,
                },
                {
                    "name": "National Defense",
                    "y": 759.0,
                },
                {
                    "name": "Nondefense",
                    "y": 535.8,
                },
                {
                    "name": "State and Local",
                    "y": 2162.0,
                }
            ]
        }
    ]
});
