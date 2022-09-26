import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {
    const { default: Info } = require('../../../../../src/components/Chat/ChatItems/Messages/Info.jsx');
    const component = renderer.create(<Info message='mock message'/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});