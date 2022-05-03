import { shallow } from 'enzyme';
import React from 'react';
import { MyAutocomplete } from './MyAutocomplete';;
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('Autocomplete', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MyAutocomplete />);
    expect(wrapper).toMatchSnapshot();
  });
});