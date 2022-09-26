import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {
    const { default: Question } = require('../../../../../src/components/Chat/ChatItems/Messages/Question.jsx');
    const component = renderer.create(<Question message='mock message'/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});