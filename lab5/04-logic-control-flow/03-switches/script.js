const d = new Date(2022, 1, 10, 19, 0, 0); 
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 0:
    console.log('It is January');
    break;
  case 1:
    console.log('It is February');
    break;
  case 2:
    console.log('It is March');
    break;
  default:
    console.log('It is not January, February, or March');
}

switch (true) {
  case hour < 6:
    console.log('It’s too early! Go back to sleep.');
    break;
  case hour < 12:
    console.log('Good morning! Time to start the day.');
    break;
  case hour < 18:
    console.log('Good afternoon! Keep going strong.');
    break;
  case hour < 22:
    console.log('Good evening! Time to relax.');
    break;
  default:
    console.log('It’s late! Time to sleep.');
}