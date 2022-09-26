import defaultLocations from '../config/locations.json';

const sortNumbers = (a, b) => {
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
}

const sortResults = (results) => {
    var starRatings = [...Array(5)].map(() => []);

    results.forEach(result => {
        starRatings[result?.StarRating - 1].push(result);
    });

    return starRatings.map(arr => arr.sort((a, b) => sortNumbers(a.PricePerPerNight, b.PricePerPerNight))).flat().reverse();
}

export default function searchLocations(params = {}, locations = defaultLocations) {
    const results = locations.filter(location => {
        return Object.keys(params).every(property => {
            const paramValue = params[property];
            const locationValue = location[property];

            switch (true) {
                case paramValue.toLowerCase() === 'no preference':
                    return true;
                case property === 'StarRating' && +paramValue <= +locationValue:
                    return true;
                case property === 'PricePerPerNight' && +paramValue >= +locationValue:
                    return true;
                case `${locationValue}`.toLowerCase() === paramValue.toLowerCase():
                    return true;
                default:
                    return false;
            }
        });
    })
    if (results.length > 1) {
        return sortResults(results);
    }
    return results;
}