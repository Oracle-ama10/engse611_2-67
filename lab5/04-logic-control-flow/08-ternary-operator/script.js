const age = 17;

// Using if...else
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Using Ternary
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);  // false
console.log(canVote2); // 'You can not vote'

const auth = true;

// if...else
// let redirect;
// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// ใช้ Ternary แทน
const redirect = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect); // '/dashboard'
auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('Welcome to the dashboard');
