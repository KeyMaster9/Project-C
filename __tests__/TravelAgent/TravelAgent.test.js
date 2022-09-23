import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
})

it('should render a TravelAgent Component', () => {
    jest.mock('./Components/Chat/Chat.jsx', ()=> () => <span>Chat</span>);

    const { default: TravelAgent } = require('../../src/TravelAgent/TravelAgent');
    const component = renderer.create(<TravelAgent />);
    
})