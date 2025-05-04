const pokeball = document.getElementById('pokeball');
const phoneNumber = document.getElementById('phoneNumber');
const targets = document.querySelectorAll('.target');
const gameArea = document.getElementById('gameArea');

let startX = 0;
let startY = 0;
let startTime = 0;
let velocityX = 0;
let velocityY = 0;
let isDragging = false;
let animationFrame;
let hasCaught = false;


pokeball.addEventListener('mousedown', (e) => {
  const rect = gameArea.getBoundingClientRect();
  startX = e.clientX - rect.left;
  startY = e.clientY - rect.top;
  startTime = Date.now();
  isDragging = true;

  document.addEventListener('mouseup', onRelease);
});

function onRelease(e) {
  if (!isDragging) return;
  isDragging = false;
  document.removeEventListener('mouseup', onRelease);

  const rect = gameArea.getBoundingClientRect();
  const endX = e.clientX - rect.left;
  const endY = e.clientY - rect.top;
  const endTime = Date.now();

  const timeDiff = (endTime - startTime) / 1000; 
  if (timeDiff === 0) return;

  velocityX = (endX - startX) / timeDiff / 30;
  velocityY = (endY - startY) / timeDiff / 30;

  animateThrow();
}

function animateThrow() {
  cancelAnimationFrame(animationFrame);
  const gameRect = gameArea.getBoundingClientRect();
  let x = pokeball.offsetLeft;
  let y = pokeball.offsetTop;

  function update() {
    x += velocityX;
    y += velocityY;
    velocityY += 0.6; 

    pokeball.style.left = `${x}px`;
    pokeball.style.top = `${y}px`;

    const ballRect = pokeball.getBoundingClientRect();
    const gameAreaRect = gameArea.getBoundingClientRect();

    if (!hasCaught) {
      for (let i = 0; i < targets.length; i++) {
        const targetRect = targets[i].getBoundingClientRect();
        if (isColliding(ballRect, targetRect)) {
          hasCaught = true;
          attemptCatch(targets[i]);
          cancelAnimationFrame(animationFrame);
          resetBall();
          break;
        }
      }
    }
    
    
    

    if (
      ballRect.top > gameAreaRect.bottom ||
      ballRect.bottom < gameAreaRect.top ||
      ballRect.left > gameAreaRect.right ||
      ballRect.right < gameAreaRect.left
    ) {
      resetBall();
      return;
    }

    animationFrame = requestAnimationFrame(update);
  }

  update();
}

function isColliding(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
function attemptCatch(target) {
  const originalText = target.innerText;
  target.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" style="width: 60px; animation: shake 1s infinite;">';

  setTimeout(() => {
    const caught = Math.random() < 0.66;

    if (caught) {
      if (phoneNumber.value.length < 10) {
        phoneNumber.value += target.dataset.number;

        phoneNumber.classList.remove('pop-effect');  
        void phoneNumber.offsetWidth;             
        phoneNumber.classList.add('pop-effect');
        
              } else {
        showLimitMessage();
      }
      target.innerText = originalText;
    } else {
      target.innerText = 'Miss!';
      setTimeout(() => {
        target.innerText = originalText;
      }, 700);
    }
    hasCaught = false;
  }, 1000);
}

function showLimitMessage() {
  const limitMessage = document.getElementById('limitMessage');
  limitMessage.style.display = 'block';
  setTimeout(() => {
    limitMessage.style.display = 'none';
  }, 2000);
}



function resetBall() {
  pokeball.style.transition = 'all 0.4s ease';
  pokeball.style.left = 'calc(50% - 25px)';
  pokeball.style.bottom = '20px';
  pokeball.style.top = '';
}


const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
  phoneNumber.value = '';
  hasCaught = false;

  targets.forEach((target) => {
    target.innerText = target.dataset.number;
  });

  pokeball.style.transition = 'none';
  pokeball.style.left = 'calc(50% - 25px)';
  pokeball.style.bottom = '20px';
  pokeball.style.top = '';
  
  setTimeout(() => {
    pokeball.style.transition = 'all 0.4s ease';
  }, 10);
});
const submit = document.getElementById('submit');
const congratsMessage = document.getElementById('congratsMessage');

submit.addEventListener('click', () => {
  const number = phoneNumber.value;
  if (number.length >= 10) {
    congratsMessage.style.display = 'block';
    congratsMessage.textContent = 'Congrats! You entered your number!';
  } else {
    congratsMessage.style.display = 'block';
    congratsMessage.textContent = 'Still missing some digits!';
  }

  setTimeout(() => {
    congratsMessage.style.display = 'none';
  }, 3000);
});


