import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

[true, false].forEach(bool => {
    it('should render a TravelAgent Component', () => {
        const mockOnSubmit = () => 'mock onSubmit';
    
        const { default: Send } = require('../../../../src/components/Reply/Send/Send.jsx');
        const component = renderer.create(<Send onSubmit={mockOnSubmit} isDisabled={bool} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
})


