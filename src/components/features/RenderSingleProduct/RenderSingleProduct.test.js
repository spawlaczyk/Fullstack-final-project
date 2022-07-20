import React from 'react';
import { shallow } from 'enzyme';
import { RenderSingleProductComponent } from './RenderSingleProduct';

describe('Component RenderSingleProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<RenderSingleProductComponent />);
    expect(component).toBeTruthy();
  });
});
