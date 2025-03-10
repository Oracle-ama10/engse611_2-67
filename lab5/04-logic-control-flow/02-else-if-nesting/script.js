const d = new Date(2025, 9, 30, 6, 0, 0); 
const hour = d.getHours();

if (hour < 11) {
  console.log('Good Morning!');
} else if (hour < 17) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Evening!');
}

if (hour < 11) {
  console.log('Good Morning!');

  if (hour === 5) {
    console.log('Time to wake up!');
  }
} else if (hour < 17) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Evening!');

  if (hour >= 21) {
    console.log('Time to sleep... zzz');
  }
}

if (hour >= 10 && hour < 18) {
  console.log('Work hours: Stay productive!');
}

if (hour === 6 || hour === 19) {
  console.log('Remember to brush your teeth!');
}