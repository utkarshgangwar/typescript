const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const mulitply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    // return undefined;
    // return null;
};

const throwError = (message: string): never => {
    throw new Error(message);
}

const throwErrorStr = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};


const throwErrorVoid = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(`
            date is ${forecast.date}
            weather is ${forecast.weather}
        `);
};

// destructuring
const logWeatherDes = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(`
            date is ${date}
            weather is ${weather}
        `);
};

