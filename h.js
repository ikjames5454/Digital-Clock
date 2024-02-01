let { getHours, getMinutes, getSeconds } = new Date();

console.log("Current Time:");
console.log(`Hours: ${getHours.call(new Date())}`);
console.log(`Minutes: ${getMinutes.call(new Date())}`);
console.log(`Seconds: ${getSeconds.call(new Date())}`);
