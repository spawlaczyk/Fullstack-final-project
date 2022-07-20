import React from 'react';
import { shallow } from 'enzyme';
import { SingleProductComponent } from './SingleProduct';

describe('Component SingleProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<SingleProductComponent />);
    expect(component).toBeTruthy();
  });
});
