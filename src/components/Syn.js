// Define some variables to represent household characteristics
const numOccupants = 1;
const homeSize = 30; // in square meters

// Define a function to generate a random number within a certain range
function getRandomInRange(min, max) {
    rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
}

// Define a function to simulate energy usage for a given date and time
function simulateEnergyUsage(date) {
    const hour = date.getHours();
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });

    let usage = 0;

    // During off-peak hours, usage is lower
    if (hour >= 0 && hour < 8) {
        usage = getRandomInRange(5, 10); // kWh
    }
    // During the morning, energy usage is moderate
    else if (hour >= 8 && hour < 12) {
        usage = getRandomInRange(10, 15); // kWh
    }
    // During the afternoon and evening, energy usage is higher
    else if (hour >= 12 && hour < 21) {
        usage = getRandomInRange(15, 20); // kWh
        // If it's a weekday, usage is higher during cooking hours
        if (dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday' && (hour >= 16 && hour < 20)) {
            usage += getRandomInRange(5, 10); // kWh
        }
    }
    // During late night hours, usage is moderate again
    else {
        usage = getRandomInRange(5, 15); // kWh
    }

    return usage;
}

// Define a function to generate synthetic energy consumption data for a week
const GenerateEnergyData = (numWeeks) => {
    let data = [];

    for (let week = 0; week < numWeeks; week++) {
        const startDate = new Date(2023, 0, 6); // start date, 0 är januari osv.
        const endDate = new Date(); // end date maybe should be function whats todays date

        for (let date = new Date(startDate); date <= endDate; date.setHours(date.getHours() + 1)) {
            // Simulate energy usage for a given date and time
            const usage = simulateEnergyUsage(date);
            // Add some random variation to the usage
            const variation = getRandomInRange(-3, 3); // kWh
            const totalUsage = Math.max(usage + variation, 0);
            // Add the usage data to the array
            data.push({
                date: date.toLocaleString(),
                usage: totalUsage
            });
        }
    }

    return data;
}

// Generate one week of synthetic energy data
const energyData = GenerateEnergyData(1);
console.log(energyData);

export default GenerateEnergyData;