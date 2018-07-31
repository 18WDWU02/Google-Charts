google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart(){
    console.log("packages have been loaded");
    // var variableName;
    // const variableName;
    // let variableName;

    const data = google.visualization.arrayToDataTable([
        ['Id','Age','Height','Pets'],
          ['s1',25,154,'cat'],
          ['s2',23,160,'cat'],
          ['s3',19,171,'dog'],
          ['s4',22,166,'horse'],
          ['s5',25,159,'cat'],
          ['s6',27,180,'dog'],
          ['s7',25,175,'donkey'],
          ['s8',20,160,'squirel'],
          ['s9',26,172,'meercat']
    ]);


    // Set chart options
     var options = {'title':'Correlation between Age, height and Pets',
                       hAxis: {title:'Age'},
                       vAxis: {title:'Height'},
                       bubble: {textStyle:{fontSize:11}}
                        };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BubbleChart(document.getElementById('chartContainer'));
        chart.draw(data, options);

}








//End of page
