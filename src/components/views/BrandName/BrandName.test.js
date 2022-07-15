import React from 'react';
import { shallow } from 'enzyme';
import { BrandNameComponent } from './BrandName';

describe('Component BrandName', () => {
  it('should render without crashing', () => {
    const component = shallow(<BrandNameComponent />);
    expect(component).toBeTruthy();
  });
});
