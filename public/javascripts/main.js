jQuery(document).ready(() => {

    let urlname = window.location.href;
    const country = extractCountryFromURL(urlname);
    let urlNew = 'http://ec2-35-177-19-196.eu-west-2.compute.amazonaws.com:3000/api/macrodata/' + country;

    jQuery.getJSON(urlNew, (data) => {
        let processedData = preProcessData(data);
        // Create the chart
        Highcharts.chart('container', {

            /* rangeSelector: {
             selected: 1
             },*/

            chart: {
                zoomType: 'x'
            },



            title: {
                text: 'Macroeconomic Data'
            },

            xAxis: [{
                type: "datetime",
                tickInterval: 24 * 3600 * 1000 * 365 // mills in a year.
            }],
            yAxis:[{
                title: {
                    text: 'GDP ($ Billion)',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels:{
                    // format: '${value} billion',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }, {
                title: {
                    text: 'GDP Per Capita ($)',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels:{
                    // format: '${value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },

            },
                {
                    title: {
                        text: 'Inflation Rate/Unemployment Rate (%)',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    labels:{
                        // format: '{value}%',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    opposite: true

                }],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                name: 'GDP',
                data: processedData.gdp,
                tooltip: {
                    valueDecimals: 2,
                    valuePrefix: '$'
                }
            },
                {
                    name: 'GDP Per Capita',
                    data: processedData.gdpPerCapita,
                    tooltip: {
                        valueDecimals: 2,
                        valuePrefix: '$'
                    },
                    yAxis: 1
                },
                {
                    name: 'Inflation Rate',
                    data: processedData.inflationRate,
                    tooltip: {
                        valueDecimals: 2,
                        valueSuffix: '%'
                    },
                    color: Highcharts.getOptions().colors[2],
                    shadow: true,
                    yAxis: 2
                },
                {
                    name: 'Unemployment Rate',
                    data: processedData.unemploymentRate,
                    tooltip: {
                        valueDecimals: 2,
                        valueSuffix: '%'
                    },
                    color: Highcharts.getOptions().colors[2],
                    yAxis: 2
                }]
        });
    });



});

function extractCountryFromURL(url) {
    url = url.endsWith('/') ? url.slice(0, -1) : url;
    let country = url.substr(url.lastIndexOf('/') + 1);
    const separator = '-';
    if (country.indexOf(separator) != -1){
        let individualStrings = country.split(separator);
        let capitalizedStrings = individualStrings.map((element) => element.charAt(0).toUpperCase() + element.slice(1));
        country = capitalizedStrings.join("");
    }
    return country;
}

function preProcessData(dataPoints){
    let gdpSeries = [];
    let gdpPerCapitaSeries = [];
    let inflationRateSeries = [];
    let unemploymentRateSeries = [];

    dataPoints.forEach((dataPoint) => {
        let year = new Date(dataPoint['year'].toString()).getTime();
        let gdp = parseFloat(dataPoint['gdp']);
        let gdp_per_capita = parseFloat(dataPoint['gdp_per_capita']);
        let inflation_rate = parseFloat(dataPoint['inflation_rate']);
        let unemployment_rate = parseFloat(dataPoint['unemployment_rate']);

        gdpSeries.push([year, gdp])
        gdpPerCapitaSeries.push([year, gdp_per_capita]);
        inflationRateSeries.push([year,inflation_rate]);
        unemploymentRateSeries.push([year, unemployment_rate]);

    });
    return{
        gdp: gdpSeries,
        gdpPerCapita: gdpPerCapitaSeries,
        inflationRate: inflationRateSeries,
        unemploymentRate: unemploymentRateSeries
    }



}


