// [ EV/EBITDA_v1 ] start

$(document).ready(function () {
//            Morris.Area({
//                element: 'morris-area-chart-EV-EBITDA',
//                data: [{
//                        y: '2020-06-30',
//                        a: 7.0
//
//                    },
//                    {
//                        y: '2020-03-31',
//                        a: 6.5
//
//                    },
//                    {
//                        y: '2019-12-31',
//                        a: 7.2
//
//                    },
//                    {
//                        y: '2019-09-30',
//                        a: 6.5
//
//                    },
//                    {
//                        y: '2019-06-30',
//                        a: 6.9
//
//                    },
//                    {
//                        y: '2019-03-31',
//                        a: 7.4
//
//                    },
//                    {
//                        y: '2018-12-31',
//                        a: 7.6
//
//                    },
//                    {
//                        y: '2018-09-30',
//                        a: 10.7
//
//                    },
//                    {
//                        y: '2018-06-30',
//                        a: 10.2
//
//                    },
//                    {
//                        y: '2018-03-31',
//                        a: 10.5
//
//                    },
//                    {
//                        y: '2017-12-31',
//                        a: 9.9
//                    },
//                ],
//                xkey: 'y',
//                ykeys: ['a'],
//                labels: ['EV/EBITDA'],
//<!--                pointSize: 0,-->
//<!--                fillOpacity: 0.8,-->
//                pointStrokeColors: ['#b4becb'],
//                behaveLikeLine: true,
//                gridLineColor: '#e0e0e0',
//<!--                lineWidth: 0,-->
//                smooth: false,
//                hideHover: 'auto',
//                responsive:true,
//                lineColors: ['#A389D4'],
//                resize: true
//            });
//
//            Morris.Area({
//                element: 'morris-area-chart-EV-S',
//                data: [{
//                        y: '2020-06-30',
//                        a: 1.0
//
//                    },
//                    {
//                        y: '2020-03-31',
//                        a: 1.2
//
//                    },
//                    {
//                        y: '2019-12-31',
//                        a: 1.2
//
//                    },
//                    {
//                        y: '2019-09-30',
//                        a: 1.3
//
//                    },
//                    {
//                        y: '2019-06-30',
//                        a: 1.4
//
//                    },
//                    {
//                        y: '2019-03-31',
//                        a: 1.6
//
//                    },
//                    {
//                        y: '2018-12-31',
//                        a: 1.5
//
//                    },
//                    {
//                        y: '2018-09-30',
//                        a: 1.9
//
//                    },
//                    {
//                        y: '2018-06-30',
//                        a: 1.8
//
//                    },
//                    {
//                        y: '2018-03-31',
//                        a: 1.9
//
//                    },
//                    {
//                        y: '2017-12-31',
//                        a: 1.7
//                    },
//                ],
//                xkey: 'y',
//                ykeys: ['a'],
//                labels: ['EV/S'],
//<!--                pointSize: 0,-->
//<!--                fillOpacity: 0.8,-->
//                pointStrokeColors: ['#b4becb'],
//                behaveLikeLine: true,
//                gridLineColor: '#e0e0e0',
//<!--                lineWidth: 0,-->
//                smooth: false,
//                hideHover: 'auto',
//                responsive:true,
//                lineColors: ['#A389D4'],
//                resize: true
//            });

                // [ Line Chart 2 ] start

//    var data1 = [{
//                        'year': '2020-06-30',
//                        'a': 1.0,
//                        'b': 7.0
//                    },
//                    {
//                        'year': '2020-03-31',
//                        'a': 1.2,
//                        'b': 6.5
//                    },
//                    {
//                        'year': '2019-12-31',
//                        'a': 1.2,
//                        'b': 7.2
//
//                    },
//                    {
//                        'year': '2019-09-30',
//                        'a': 1.3,
//                        'b': 6.5
//                    },
//                    {
//                        'year': '2019-06-30',
//                        'a': 1.4,
//                        'b': 6.9
//                    },
//                    {
//                        'year': '2019-03-31',
//                        'a': 1.6,
//                        'b': 7.4
//                    },
//                    {
//                        'year': '2018-12-31',
//                        'a': 1.5,
//                        'b': 7.6
//                    },
//                    {
//                        'year': '2018-09-30',
//                        'a': 1.9,
//                        'b': 10.7
//                    },
//                    {
//                        'year': '2018-06-30',
//                        'a': 1.8,
//                        'b': 10.2
//                    },
//                    {
//                        'year': '2018-03-31',
//                        'a': 1.9,
//                        'b': 10.5
//                    },
//                    {
//                        'year': '2017-12-31',
//                        'a': 1.7,
//                        'b': 9.9
//                    },
//                ];
//
//    var data2 = [{
//                        'year': '2020-06-30',
//                        'a': 1.3,
//                        'b': 7.6
//                    },
//                    {
//                        'year': '2020-03-31',
//                        'a': 1.3,
//                        'b': 7.2
//                    },
//                    {
//                        'year': '2019-12-31',
//                        'a': 1.5,
//                        'b': 9.2
//
//                    },
//                    {
//                        'year': '2019-09-30',
//                        'a': 1.5,
//                        'b': 9.3
//                    },
//                    {
//                        'year': '2019-06-30',
//                        'a': 1.5,
//                        'b': 9.2
//                    },
//                    {
//                        'year': '2019-03-31',
//                        'a': 1.5,
//                        'b': 9.2
//                    },
//                    {
//                        'year': '2018-12-31',
//                        'a': 1.6,
//                        'b': 9.5
//                    },
//                    {
//                        'year': '2018-09-30',
//                        'a': 1.8,
//                        'b': 10.1
//                    },
//                    {
//                        'year': '2018-06-30',
//                        'a': 1.5,
//                        'b': 9.3
//                    },
//                    {
//                        'year': '2018-03-31',
//                        'a': 1.4,
//                        'b': 9.0
//                    },
//                    {
//                        'year': '2017-12-31',
//                        'a': 1.5,
//                        'b': 9.2
//                    },
//                ];
//
//    var datasets = [data1, data2];
//
//    var selectedIndustry = document.getElementById("industrySelector").value;

    var chart = AmCharts.makeChart("line-chart2", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "dataProvider": [
                            {
                        'year': '2017-12-31',
                        'a': 1.7,
                        'b': 9.9
                    },
                    {
                        'year': '2018-03-31',
                        'a': 1.9,
                        'b': 10.5
                    },
                    {
                        'year': '2018-06-30',
                        'a': 1.8,
                        'b': 10.2
                    },
                    {
                        'year': '2018-09-30',
                        'a': 1.9,
                        'b': 10.7
                    },
                    {
                        'year': '2018-12-31',
                        'a': 1.5,
                        'b': 7.6
                    },

                    {
                        'year': '2019-03-31',
                        'a': 1.6,
                        'b': 7.4
                    },
                    {
                        'year': '2019-06-30',
                        'a': 1.4,
                        'b': 6.9
                    },
                    {
                        'year': '2019-09-30',
                        'a': 1.3,
                        'b': 6.5
                    },
                    {
                        'year': '2019-12-31',
                        'a': 1.2,
                        'b': 7.2

                    },
                    {
                        'year': '2020-03-31',
                        'a': 1.2,
                        'b': 6.5
                    },
{
                        'year': '2020-06-30',
                        'a': 1.0,
                        'b': 7.0
                    },
                ],
        "valueAxes": [{
            "axisAlpha": 0,
//            "minimum": 0,
//            "maximum": 2.5,
            "position": "left"
        }],
        "graphs": [{
            "id": "g1",
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletBorderAlpha": 2,
            "bulletAlpha": 1,
            "bulletSize": 12,
            "stackable": false,
            "bulletColor": "#fff",
            "bulletBorderColor": "#a389d4",
            "bulletBorderThickness": 3,
            "lineColor": "#a389d4",
            "lineThickness": 2,
//            "type": "smoothedLine",
            "valueField": "a",
            "title": "EV/Sales"
        },
        {
            "id": "g2",
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletBorderAlpha": 2,
            "bulletAlpha": 1,
            "bulletSize": 12,
            "stackable": false,
            "bulletColor": "#fff",
            "bulletBorderColor": "#1ddcc8",
            "bulletBorderThickness": 3,
            "lineColor": "#1ddcc8",
            "lineThickness": 2,
//            "type": "smoothedLine",
            "valueField": "b",
            "title": "EV/EBITDA"
        }],
        "chartCursor": {
            "cursorAlpha": 0,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "valueLineAlpha": 0.5,
            "fullWidth": true
        },
        "categoryField": "year",
        "categoryAxis": {
            "minorGridAlpha": 0,
            "minorGridEnabled": true,
            "gridAlpha": 0,
            "axisAlpha": 0,
            "lineAlpha": 0
        },
        "hideCredits":true,
        "legend": {
            "useGraphSettings": true,
//            "position": "top",
        },
    });

    $("#trailing-ev-ebitda").html("x7.0");
    $("#forward-ev-ebitda").html("x6.5");
    $("#trailing-ev-sales").html("x1.0");
    $("#forward-ev-sales").html("x0.7");

    $("#company-list").load('paper_packaging.html');

    // [ Line Chart 2 ] end
        });

//$(document).ready(industryUpdate());
$("#industrySelector").change(function () {
        var data1 = [{
                        'year': '2017-12-31',
                        'a': 1.7,
                        'b': 9.9
                    },
                    {
                        'year': '2018-03-31',
                        'a': 1.9,
                        'b': 10.5
                    },
                    {
                        'year': '2018-06-30',
                        'a': 1.8,
                        'b': 10.2
                    },
                    {
                        'year': '2018-09-30',
                        'a': 1.9,
                        'b': 10.7
                    },
                    {
                        'year': '2018-12-31',
                        'a': 1.5,
                        'b': 7.6
                    },

                    {
                        'year': '2019-03-31',
                        'a': 1.6,
                        'b': 7.4
                    },
                    {
                        'year': '2019-06-30',
                        'a': 1.4,
                        'b': 6.9
                    },
                    {
                        'year': '2019-09-30',
                        'a': 1.3,
                        'b': 6.5
                    },
                    {
                        'year': '2019-12-31',
                        'a': 1.2,
                        'b': 7.2

                    },
                    {
                        'year': '2020-03-31',
                        'a': 1.2,
                        'b': 6.5
                    },
{
                        'year': '2020-06-30',
                        'a': 1.0,
                        'b': 7.0
                    },
                ];

    var data2 = [{
                        'year': '2017-12-31',
                        'a': 1.5,
                        'b': 9.2
                    },
                    {
                        'year': '2018-03-31',
                        'a': 1.4,
                        'b': 9.0
                    },
                    {
                        'year': '2018-06-30',
                        'a': 1.5,
                        'b': 9.3
                    },
                    {
                        'year': '2018-09-30',
                        'a': 1.8,
                        'b': 10.1
                    },
                    {
                        'year': '2018-12-31',
                        'a': 1.6,
                        'b': 9.5
                    },
                    {
                        'year': '2019-03-31',
                        'a': 1.5,
                        'b': 9.2
                    },

                    {
                        'year': '2019-06-30',
                        'a': 1.5,
                        'b': 9.2
                    },
                    {
                        'year': '2019-09-30',
                        'a': 1.5,
                        'b': 9.3
                    },
                    {
                        'year': '2019-12-31',
                        'a': 1.5,
                        'b': 9.2

                    },
                    {
                        'year': '2020-03-31',
                        'a': 1.3,
                        'b': 7.2
                    },
                    {
                        'year': '2020-06-30',
                        'a': 1.3,
                        'b': 7.6
                    },
                ];

    var datasets = [
            {
            "data": data1,
            "trailing-ev-ebitda": "x7.0",
            "forward-ev-ebitda": "x6.5",
            "trailing-ev-sales": "x1.0",
            "forward-ev-sales": "x0.7",
            "company-list": "paper_packaging.html",
            },
            {
            "data": data2,
            "trailing-ev-ebitda": "x7.6",
            "forward-ev-ebitda": "x7.1",
            "trailing-ev-sales": "x1.3",
            "forward-ev-sales": "x1.1",
            "company-list": "healthcare.html",
            }];

    var selectedIndustry = $(this).val();

    var chart = AmCharts.makeChart("line-chart2", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "dataProvider": datasets[selectedIndustry-1]["data"],
        "valueAxes": [{
            "axisAlpha": 0,
//            "minimum": 0,
//            "maximum": 2.5,
            "position": "left"
        }],
        "graphs": [{
            "id": "g1",
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletBorderAlpha": 2,
            "bulletAlpha": 1,
            "bulletSize": 12,
            "stackable": false,
            "bulletColor": "#fff",
            "bulletBorderColor": "#a389d4",
            "bulletBorderThickness": 3,
            "lineColor": "#a389d4",
            "lineThickness": 2,
//            "type": "smoothedLine",
            "valueField": "a",
            "title": "EV/Sales"
        },
        {
            "id": "g2",
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletBorderAlpha": 2,
            "bulletAlpha": 1,
            "bulletSize": 12,
            "stackable": false,
            "bulletColor": "#fff",
            "bulletBorderColor": "#1ddcc8",
            "bulletBorderThickness": 3,
            "lineColor": "#1ddcc8",
            "lineThickness": 2,
//            "type": "smoothedLine",
            "valueField": "b",
            "title": "EV/EBITDA"
        }],
        "chartCursor": {
            "cursorAlpha": 0,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "valueLineAlpha": 0.5,
            "fullWidth": true
        },
        "categoryField": "year",
        "categoryAxis": {
            "minorGridAlpha": 0,
            "minorGridEnabled": true,
            "gridAlpha": 0,
            "axisAlpha": 0,
            "lineAlpha": 0
        },
        "hideCredits":true,
        "legend": {
            "useGraphSettings": true,
//            "position": "top",
        },
    });

    $("#trailing-ev-ebitda").html(datasets[selectedIndustry-1]["trailing-ev-ebitda"]);
    $("#forward-ev-ebitda").html(datasets[selectedIndustry-1]["forward-ev-ebitda"]);
    $("#trailing-ev-sales").html(datasets[selectedIndustry-1]["trailing-ev-sales"]);
    $("#forward-ev-sales").html(datasets[selectedIndustry-1]["forward-ev-sales"]);

    $("#company-list").load(datasets[selectedIndustry-1]["company-list"])

});

// [ EV/EBITDA_v1 ] end

// [ EV/S_v1 ] start

// [ EV/S_v1 ] end


 // [ Line with Area Chart 2 ] start

    // [ Line with Area Chart 2 ] end