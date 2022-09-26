beforeEach(() => {
    jest.restoreAllMocks();
});

it('should return expected results', () => {
    const { default: searchLocations } = require('../..//src/helpers/searchLocations.js');
    const { default: mockLocations } = require('./mockVariables/mockLocations.json');

    const activeAsianHolidays = searchLocations({ Category: 'Active', Continent: 'Asia' }, mockLocations)
    activeAsianHolidays.forEach(holiday => {
        expect(holiday.Category).toBe('active')
        expect(holiday.Continent).toBe('Asia')
    })
});