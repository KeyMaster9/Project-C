import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {

    const mockValue = '';
    const mockSetValue = () => null;
    const mockOptions = ['first option', 'next option']

    const { default: Select } = require('../../../../src/components/Reply/Responses/Select.jsx');
    const component = renderer.create(<Select value={mockValue} setValue={mockSetValue} options={mockOptions} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

