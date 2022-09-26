import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {
    jest.mock('../../../src/components/Chat/Chat', () => () => <span>Chat</span>);

    const { default: TravelAgent } = require('../../../src/container/TravelAgent/TravelAgent.jsx');
    const component = renderer.create(<TravelAgent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});