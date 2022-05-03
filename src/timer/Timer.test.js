import { shallow } from 'enzyme';
import React from 'react';
import { Timer } from './Timer';;
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('Timer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper).toMatchSnapshot();
  });
});