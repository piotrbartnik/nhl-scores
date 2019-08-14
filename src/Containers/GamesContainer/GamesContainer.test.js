import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScoreSquare from '../../Components/ScoreSquare/ScoreSquare';

configure({ adapter: new Adapter() });

describe('<ScoreSquares', () => {
  it('should render as much ScoreSquares as games that day', () => {
    const wrapper = shallow(<ScoreSquare />)
    expect(wrapper.find('div'));
  });
})
