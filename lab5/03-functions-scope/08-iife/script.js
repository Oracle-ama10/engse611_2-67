(function () {
    const username = 'Sven';
    console.log(username);
    const greet = () => console.log('Welcome from the DEA');
    greet();
  })();
  
  (function (city) {
    console.log('Welcome to ' + city);
  })('Blackstreet');
  
  (function sayHi() {
    console.log('Hi fixer');
  })();
  