import defaultLocations from '../config/locations.json';

export default function searchLocations(params = {}, locations = defaultLocations) {
    return locations.filter(location => {
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
}