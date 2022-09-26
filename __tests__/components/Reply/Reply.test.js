import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

[2, 3].forEach(num => {
    it('should render a TravelAgent Component', () => {
        jest.mock('../../../src/components/Reply/Responses/Buttons.jsx', () => (props) => <span>{JSON.stringify(props)}</span>);
        jest.mock('../../../src/components/Reply/Responses/Select.jsx', () => (props) => <span>{JSON.stringify(props)}</span>);
        jest.mock('../../../src/components/Reply/Send/Send.jsx', () => (props) => <span>{JSON.stringify(props)}</span>)

        const mockOnSend = () => 'mock onSend';

        const mockQuestion = {
            property: 'test',
            question: 'this is the test question',
            responses: [...Array(num)].map((x, i) => `${i + 1}`),
        }

        const { default: Reply } = require('../../../src/components/Reply/Reply.jsx');
        const component = renderer.create(<Reply question={mockQuestion} onSend={mockOnSend} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})

