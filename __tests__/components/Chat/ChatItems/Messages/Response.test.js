import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {
    const { default: Response } = require('../../../../../src/components/Chat/ChatItems/Messages/Response.jsx');
    const component = renderer.create(<Response message='mock response message'/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});