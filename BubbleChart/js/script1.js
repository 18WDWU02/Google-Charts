google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart(){
    console.log("packages have been loaded");
    // var variableName;
    // const variableName;
    // let variableName;

    const data = google.visualization.arrayToDataTable([
        ['Student','Module1Mark','Attendance%','Tobe'],
          ['001',87,85,'Designer'],
          ['002',66,69,'Developer'],
          ['003',64,75,'Designer'],
          ['004',70,60,'Front End Developer'],
          ['005',68,80,'Front End Developer'],
          ['006',81,80,'Graphic Designer'],
          ['007',90,75,'Web Developer'],
          ['008',77,60,'Graphic Designer'],
          ['009',86,72,'Web Developer']
    ]);


    // Set chart options
     var options = {'title':'Correlation between Marks, Attendance, Job',
                       hAxis: {title:'Module Mark'},
                       vAxis: {title:'Attendance Percentage'},
                       bubble: {textStyle:{fontSize:12}}
                        };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BubbleChart(document.getElementById('chartContainer'));
        chart.draw(data, options);

}








//End of page
