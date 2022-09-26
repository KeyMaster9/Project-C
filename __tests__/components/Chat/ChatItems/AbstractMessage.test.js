import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {
    const { default: AbstractMessage } = require('../../../../src/components/Chat/ChatItems/AbstractMessage.jsx');
    const component = renderer.create(<AbstractMessage message='mock message' className='mockClassName'/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});