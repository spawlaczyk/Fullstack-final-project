import React from 'react';
import { shallow } from 'enzyme';
import { AboutUsComponent } from './AboutUs';

describe('Component AboutUs', () => {
  it('should render without crashing', () => {
    const component = shallow(<AboutUsComponent />);
    expect(component).toBeTruthy();
  });
});
