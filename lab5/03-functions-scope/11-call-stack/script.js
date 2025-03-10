// First Example
function start() {
    console.log('Start...');
  }
  
  function process() {
    console.log('Processing...');
  }
  
  function end() {
    console.log('End...');
  }
  
  start();
  process();
  end();

  // Second Example
  function start() {
       console.log('Start...');
       process();
     }
    
     function process() {
       console.log('Processing...');
       end();
     }
    
     function end() {
       console.log('End...');
     }
    
     start();