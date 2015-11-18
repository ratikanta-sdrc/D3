// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('ctrl', function($window, $scope){
  $scope.dev_width = $window.innerWidth;
$scope.dev_height = $window.innerHeight;
// alert($scope.dev_width);
// alert($scope.dev_height);
  var data = [{
    "sale": "202",
    "year": "0"
}, {
    "sale": "215",
    "year": "1"
}, {
    "sale": "179",
    "year": "2"
}, {
    "sale": "199",
    "year": "3"
}, {
    "sale": "134",
    "year": "5"
}, {
    "sale": "176",
    "year": "10"
}];

var data2 = [{
    "sale": "152",
    "year": "0"
}, {
    "sale": "189",
    "year": "2"
}, {
    "sale": "179",
    "year": "4"
}, {
    "sale": "199",
    "year": "6"
}, {
    "sale": "134",
    "year": "8"
}, {
    "sale": "176",
    "year": "10"
}];


  var vis = d3.select("#visualisation"),
    WIDTH = $scope.dev_width,
    HEIGHT = $scope.dev_height,
    MARGINS = {
        top: ($scope.dev_height * 20) / 100,
        right: ($scope.dev_width * 5) / 100,
        bottom: ($scope.dev_height * 20) / 100,
        left: ($scope.dev_width * 11) / 100
    },
    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0,10]),
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134,215]),
    xAxis = d3.svg.axis()
    .scale(xScale),

    // yAxis = d3.svg.axis()
    // .scale(yScale);
  
    yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");


    // vis.append("svg:g")
    // .call(xAxis);

    vis.append("svg:g")
    .attr("class","axis")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);

    // vis.append("svg:g")
    // .call(yAxis);

    vis.append("svg:g")
    .attr("class","axis")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

    var lineGen = d3.svg.line()
      .x(function(d) {
        return xScale(d.year);
      })
      .y(function(d) {
        return yScale(d.sale);
      })
      .interpolate("basis");
    vis.append('svg:path')
      .attr('d', lineGen(data))
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
    vis.append('svg:path')
    .attr('d', lineGen(data2))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');    


})

;
