// /**
//  * Created by Tobi on 7/10/2017.
//  */
// var table, mapping, chart;
// anychart.onDocumentReady(function() {
//
//     table = anychart.data.table();
//     table.addData([
//         ['2015-12-24 12:00:00','511.53', '514.98', '505.79', '506.40'],
//         ['2015-12-25 12:00:00','512.53', '514.88', '505.69', '507.34'],
//         ['2015-12-26 12:00:00','511.83', '514.98', '505.59', '506.23'],
//         ['2015-12-27 12:00:00','511.22', '515.30', '505.49', '506.47'],
//         ['2015-12-28 12:00:00','510.35', '515.72', '505.23', '505.80'],
//         ['2015-12-29 12:00:00','510.53', '515.86', '505.38', '508.25'],
//         ['2015-12-30 12:00:00','511.43', '515.98', '505.66', '507.45'],
//         ['2015-12-31 12:00:00','511.50', '515.33', '505.99', '507.98'],
//         ['2016-01-01 12:00:00','511.32', '514.29', '505.99', '506.37'],
//         ['2016-01-02 12:00:00','511.70', '514.87', '506.18', '506.75'],
//         ['2016-01-03 12:00:00','512.30', '514.78', '505.87', '508.67'],
//         ['2016-01-04 12:00:00','512.50', '514.77', '505.83', '508.35'],
//         ['2016-01-05 12:00:00','511.53', '516.18', '505.91', '509.42'],
//         ['2016-01-06 12:00:00','511.13', '516.01', '506.00', '509.26'],
//         ['2016-01-07 12:00:00','510.93', '516.07', '506.00', '510.99'],
//         ['2016-01-08 12:00:00','510.88', '515.93', '505.22', '509.95'],
//         ['2016-01-09 12:00:00','509.12', '515.97', '505.15', '510.12'],
//         ['2016-01-10 12:00:00','508.53', '516.13', '505.66', '510.42'],
//         ['2016-01-11 12:00:00','508.90', '516.24', '505.73', '510.40']
//     ]);
//
//     // mapping the data
//     mapping = table.mapAs();
//     mapping.addField('open', 1, 'first');
//     mapping.addField('high', 2, 'max');
//     mapping.addField('low', 3, 'min');
//     mapping.addField('close', 4, 'last');
//     mapping.addField('value', 4, 'last');
//
//     // defining the chart type
//     chart = anychart.stock();
//
//     // set the series type
//     chart.plot(0).ohlc(mapping).name('ACME Corp.');
//
//     // setting the chart title
//     chart.title('AnyStock Basic Sample');
//
//     chart.container('container');
//     chart.draw();
// });
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {


        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            name: 'AAPL',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
})