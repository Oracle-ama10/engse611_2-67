
function createAccount(username = 'Guest') {
    return `${username} has been successfully created`;
  }
  
  console.log(createAccount());
  console.log(createAccount('Grim'));
  
  function multiplyAll(...nums) {
    return nums.reduce((product, num) => product * num, 1);
  }
  
  console.log(multiplyAll(7, 3, 4)); //
  console.log(multiplyAll(9, 2, 2, 20)); // 
  
  
  function displayUserInfo(user) {
    return `User ${user.username} (ID: ${user.userId}) is active.`;
  }
  
  const newUser = {
    userId: 101,
    username: 'Mary sue',
  };
  
  console.log(displayUserInfo(newUser));
  console.log(
    displayUserInfo({
      userId: 202,
      username: 'Redhood',
    })
  );
  

  function chooseRandom(items) {
    const index = Math.floor(Math.random() * items.length);
    console.log(`Random pick: ${items[index]}`);
  }
  
  chooseRandom(['Apple', 'Banana', 'Cherry', 'Mango']);
  chooseRandom([234, 145, 777, 752, 525]);
  