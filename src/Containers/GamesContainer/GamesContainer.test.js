import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScoreSquare from '../../Components/ScoreSquare/ScoreSquare';

configure({ adapter: new Adapter() });

describe('Games container', () => {
  it('should render as much ScoreSquares as games that day', () => {
    const wrapper = mount(<ScoreSquare />)
    expect(wrapper.find('.TeamName').hasClass('Square')).to.equal(true);
  });
})
