new Chartist.Bar('.ct-chart', {
  labels: ['Javascript', 'Ruby on Rails', 'Databases (relational & objective)', 'API interactions', 'Friday', 'Saturday', 'Sunday'],
  series: [
    [5, 4, 3, 7, 5, 10, 3],
 
  ]
}, {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  }
});