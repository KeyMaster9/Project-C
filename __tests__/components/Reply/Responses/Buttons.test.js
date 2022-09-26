import React from 'react';
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.restoreAllMocks();
});

it('should render a TravelAgent Component', () => {

    const mockValue = '';
    const mockSetValue = () => null;
    const mockOptions = ['first option', 'next option']

    const { default: Buttons } = require('../../../../src/components/Reply/Responses/Buttons.jsx');
    const component = renderer.create(<Buttons value={mockValue} setValue={mockSetValue} options={mockOptions} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

