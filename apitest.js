let nhlDateDay = '2019-04-23'

let xhttpNHL = new XMLHttpRequest();
xhttpNHL.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let responseNHL = JSON.parse(this.responseText);
    console.log(`number of games that day is ${responseNHL.dates[0].games.length}`)
    for (let i = 0; i < responseNHL.dates[0].games.length; i++) {
      console.log(responseNHL.dates[0].games[i].teams.away.team.name)
      console.log(responseNHL.dates[0].games[i].teams.away.score)
      console.log(responseNHL.dates[0].games[i].teams.home.team.name)
      console.log(responseNHL.dates[0].games[i].teams.home.score)
    }
  }
};
xhttpNHL.open("GET", `https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlDateDay}`, true);
xhttpNHL.send();

let nbaDateDay = '2019-04-23'

let xhttpNBA = new XMLHttpRequest();
xhttpNBA.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let responseNBA = JSON.parse(this.responseText);
   
      console.log(responseNBA)
    
  }
};
xhttpNBA.open("GET", `https://stats.nba.com/stats/scoreboard?DayOffset=0&GameDate=${nbaDateDay}&LeagueID=00`, true);
xhttpNBA.send();