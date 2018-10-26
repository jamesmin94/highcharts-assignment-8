Highcharts.chart('chart1', {

  title: {
    text: 'The economic indicators in the United States.'
  },
  xAxis: {
    title: {
      text: 'years'
    },
    categories: ['2016', 'Q2', 'Q3', 'Q4', '2017', 'Q2', 'Q3', 'Q4', '2018', 'Q2']
  },
  yAxis: {
    title: {
      text: 'Billions of Dollors $'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'center',
    verticalAlign: 'top'
  },

  series: [{
      name: 'Personal Income',
      data: [15946.5, 16031.6, 16170.6, 16351.8, 16604.4, 16721.2, 16895.1, 17103.1, 17319.2, 17499.8]
    }, {
      name: 'Gross Domestic Product',
      data: [18409.1, 18640.7, 18799.6, 18979.2, 19162.6, 19359.1, 19588.1, 19831.8, 20041.0, 20411.9]
    }
  ]

});
