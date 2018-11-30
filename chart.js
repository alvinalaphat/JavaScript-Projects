axios.get("https://programmingprojectnov2018.sluhhackclub.com/scores")
.then(function (response) {
    // handle success
    console.log(response.data.scores);
    var nameArray = [];
    var scoreArray = [];
    for(var x = 0; x<response.data.scores.length; x++){
      scoreArray[x] = response.data.scores[x].score;
      nameArray[x] = response.data.scores[x].name;
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameArray,
            datasets: [{
                label: '# of Votes',
                data: scoreArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    })
  });
