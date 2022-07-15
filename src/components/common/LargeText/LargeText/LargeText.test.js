import React from 'react';
import { shallow } from 'enzyme';
import { LargeTextComponent } from './LargeText';

describe('Component LargeText', () => {
  it('should render without crashing', () => {
    const component = shallow(<LargeTextComponent />);
    expect(component).toBeTruthy();
  });
});
