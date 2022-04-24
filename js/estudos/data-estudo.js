// 2022-07-14T22:00:00.000Z

// `https://www.toptal.com/software/definitive-guide-to-datetime-manipulation#:~:text=Getting%20the%20Current%20Time%20Stamp,passed%20since%20January%201%2C%201970.`


//comparando duas datas
const date1 = new Date("2023-08-15T22:00:00.000Z");
const date2 = new Date("2023-08-14T22:00:00.000Z");

console.log(date1.getTime());
console.log(date2.getTime());
console.log(date1.getTime() - date2.getTime());

//Math.abs para retornar apenas o resultado com o um numero absoluto (-5 = 5)
const microSecondsDif = Math.abs(date1 - date2);
const daysDif = Math.round(microSecondsDif / (1000 * 60 * 60 * 24));

//retornando a difrença em dias
console.log(daysDif);



const dateFromAPI = "2022-04-23T00:00:00Z";

const now = new Date();
const datefromAPITimeStamp = (new Date(dateFromAPI)).getTime();
const nowTimeStamp = now.getTime();

const microSecondsDiff = Math.abs(datefromAPITimeStamp - nowTimeStamp);

// Math.round is used instead of Math.floor to account for certain DST cases
// Number of milliseconds per day =
//   24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 ms/second
const daysDiff = Math.round(microSecondsDiff / (1000 * 60 * 60 * 24));

console.log(daysDiff);



const birthDateFromAPI = "30/07/1990";
// Note: We have a non-standard format. Read the API doc to determine if this means 12 Oct or 10 Dec. Change to ISO format accordingly.

const parts = birthDateFromAPI.split("/");
const birthDateISO = parts[2] + "-" + parts[1] + "-" + parts[0];

const birthDate = new Date(birthDateISO);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

if (today.getMonth() < birthDate.getMonth()) {
    age--;
}

if (today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
    age--;
}

console.log(age);