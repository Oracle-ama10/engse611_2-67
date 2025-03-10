//present time
let now = new Date();
console.log(now);
//specific date
let customDate = new Date("2024-13-25");
console.log(customDate);
//date with time
let dateTime = new Date(2024, 11, 25, 10, 30, 0); 
console.log(dateTime);
//modify date 
let date = new Date();
date.setFullYear(2024);
date.setMonth(5);      // June (Months start from 0)
date.setDate(15);
date.setHours(10);
date.setMinutes(45);

console.log(date);


