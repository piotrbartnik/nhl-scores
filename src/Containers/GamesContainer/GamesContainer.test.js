import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScoreSquare from '../../Components/ScoreSquare/ScoreSquare';

let nhlDateDay = '2019-01-02';
let prepareGames = [];

fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlDateDay}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let responseNHL = data;
    console.log(`number of games that day is ${responseNHL.dates[0].games.length}`)
    for (let i = 0; i < responseNHL.dates[0].games.length; i++) {
      let teamOne = responseNHL.dates[0].games[i].teams.away.team.name;
      let scoreOne = responseNHL.dates[0].games[i].teams.away.score;
      let teamTwo = responseNHL.dates[0].games[i].teams.home.team.name;
      let scoreTwo = responseNHL.dates[0].games[i].teams.home.score;
      prepareGames[i] = [[teamOne, scoreOne], [teamTwo, scoreTwo]];
    }
  });



configure({ adapter: new Adapter() });

describe('<ScoreSquares', () => {
  it('sould render as much ScoreSquares as games that day', () => {
    expect(shallow(<ScoreSquare />).find(ScoreSquare)).toHaveLength(prepareGames.length)
  });
})
