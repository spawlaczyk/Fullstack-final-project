import React from 'react';
import { shallow } from 'enzyme';
import { CloseButtonComponent } from './CloseButton';

describe('Component CloseButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<CloseButtonComponent />);
    expect(component).toBeTruthy();
  });
});
