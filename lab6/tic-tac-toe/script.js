const X_IMAGE_URL = 'Xd.png';
const O_IMAGE_URL = 'O1.webp';

let playerXScore = 0;
let playerOScore = 0;

function assignSpace(space, owner) {
  const image = document.createElement('img');
  image.src = owner === 'x' ? X_IMAGE_URL : O_IMAGE_URL;
  space.appendChild(image);

  const index = parseInt(space.dataset.index);
  takenBoxes[index] = owner;
  const indexToRemove = freeBoxes.indexOf(space);
  freeBoxes.splice(indexToRemove, 1);
  space.removeEventListener('click', changeToX);
}

function changeToX(event) {
  assignSpace(event.currentTarget, 'x');

  if (isGameOver()) {
    displayWinner();
  } else {
    setTimeout(computerChooseO, 500); // รอ 0.5 วิ ให้คอมพิวเตอร์เล่น
  }
}

function computerChooseO() {
  if (freeBoxes.length === 0) return;

  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];

  assignSpace(freeSpace, 'o');

  if (isGameOver()) {
    displayWinner();
  }
}

function isGameOver() {
  return freeBoxes.length === 0 || getWinner() !== null;
}

function displayWinner() {
  const winner = getWinner();
  const resultContainer = document.querySelector('#results');
  resultContainer.innerHTML = ''; // ล้างข้อความก่อนแสดงใหม่

  const header = document.createElement('h1');
  if (winner === 'x') {
    header.textContent = 'You win!';
    playerXScore++;
  } else if (winner === 'o') {
    header.textContent = 'Computer wins';
    playerOScore++;
  } else {
    header.textContent = 'Tie';
  }
  resultContainer.appendChild(header);

  updateScoreboard(); // อัปเดตคะแนน

  // ปิดการคลิกของผู้เล่น
  for (const box of freeBoxes) {
    box.removeEventListener('click', changeToX);
  }
}

function checkBoxes(one, two, three) {
  if (takenBoxes[one] !== undefined &&
      takenBoxes[one] === takenBoxes[two] &&
      takenBoxes[two] === takenBoxes[three]) {
    return takenBoxes[one];
  }
  return null;
}

// Returns 'x', 'o', or null for no winner yet.
function getWinner() {
  for (let col = 0; col < 3; col++) {
    const offset = col * 3;
    let result = checkBoxes(offset, 1 + offset, 2 + offset) ||
                 checkBoxes(col, 3 + col, 6 + col);
    if (result) {
      return result;
    }
  }
  
  return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

// ฟังก์ชันอัปเดตคะแนนบนหน้าจอ
function updateScoreboard() {
  document.querySelector('#playerXScore').textContent = playerXScore;
  document.querySelector('#playerOScore').textContent = playerOScore;
}

// ฟังก์ชันรีเซ็ตเกม
function resetGame() {
  // ล้างกระดาน
  const boxes = document.querySelectorAll('#grid div');
  boxes.forEach(box => {
    box.innerHTML = '';
    box.addEventListener('click', changeToX);
  });

  // รีเซ็ตตัวแปร
  freeBoxes.length = 0;
  for (let i = 0; i < 9; i++) {
    freeBoxes.push(boxes[i]);
  }

  takenBoxes = {};
  document.querySelector('#results').innerHTML = ''; // ล้างข้อความผลลัพธ์
}

const freeBoxes = [];
let takenBoxes = {};
const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) {
  box.addEventListener('click', changeToX);
  freeBoxes.push(box);
}

// เพิ่มปุ่มรีเซ็ต
document.querySelector('#resetButton').addEventListener('click', resetGame);