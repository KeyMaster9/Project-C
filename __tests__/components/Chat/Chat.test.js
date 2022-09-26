import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {
    jest.mock('../../../src/components/Chat/ChatItems/Messages/Info', () => ({message}) => <span>{message}</span>);
    jest.mock('../../../src/components/Chat/ChatItems/Messages/Question', () => ({message}) => <span>{message}</span>);
    jest.mock('../../../src/components/Chat/ChatItems/Messages/Response', () => ({message}) => <span>{message}</span>);

    const { default: Chat } = require('../../../src/components/Chat/Chat.jsx');
    const component = renderer.create(<Chat />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});