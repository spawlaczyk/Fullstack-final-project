import React from 'react';
import { shallow } from 'enzyme';
import { CartButtonComponent } from './CartButton';

describe('Component CartButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartButtonComponent />);
    expect(component).toBeTruthy();
  });
});
