import { shallow } from 'enzyme';
import React from 'react';
import { MyButton } from './MyButton';;
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MyButton />);
    expect(wrapper).toMatchSnapshot();
  });
});