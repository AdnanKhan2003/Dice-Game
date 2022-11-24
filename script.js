'use strict';

/*
// ---------------- DEFINING VARAIBLES: ----------------
// >> Buttons <<
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Elements
// >> DICE image <<
const diceEl = document.querySelector('.dice');
// >> Scores <<
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
// >> Player <<
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// >> DOM Variables <<
let currentScore, activePlayer, scores, playing;

// Default
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// ---------------- FUNCTIONS ----------------
// Function which sets up all 'variables' to their 'default values'
const init = function () {
  // DOM Variables
  // Setting 'currentScore' to 0
  currentScore = 0;
  // The 'new game' must be started with 'player 1'
  activePlayer = 0;
  // Setting 'scores' to their default values
  scores = [0, 0];
  playing = true;

  // Score
  // Setting 'score' and 'currentScore' to their 'default values'
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  score0El.textContent = currentScore;
  score1El.textContent = currentScore;

  // Removing winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // Adding 'player--active' to '1 player'
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// CALLING THE 'INIT()' FUNCTION
init();

// FUNCTION TO 'SWITCH PLAYER'
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ----------- EVENTS TO HAPPEN WHEN BUTTONS ARE CLICKED -----------

// Events to 'execute' when 'btnRoll' is 'clicked'
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate Random Number:
    const dice = Math.trunc(Math.random() * 5) + 1;

    // 2. Display the generated number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if dice === 1 or not:
    if (dice !== 1) {
      // Add score to currentScore (currentScore += score)
      currentScore += dice;
      // Display current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});

// Events to 'execute' when 'btnHold' is 'clicked'
btnHold.addEventListener('click', function () {
  if (playing) {
    // Adding 'current score' to the 'total score'
    scores[activePlayer] += currentScore;

    // Displaying 'total score'
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Checking if 'score' is equal to or greater than '20'
    if (scores[activePlayer] >= 20) {
      // Show 'activePlayer' as a winner
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});

// Events to 'execute' when 'btnNew' is 'clicked'
btnNew.addEventListener('click', init);
*/

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// By default:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// DOM variables:
let playing, currentScore, activePlayer, scores;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0El.textContent = currentScore;
  score1El.textContent = currentScore;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  // diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const randomNumber = function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  return diceNumber;
};

const switchPlayer = function () {
  if (playing) {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};
const btnRollEvents = function () {
  if (playing) {
    // 1] Generating numbers between '1 to 6'
    const dice = randomNumber();

    // 2] Displaying numbers
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3] Check if 'dice === 1' or not:
    if (dice !== 1) {
      // Add 'dice numbers' to 'currentScore'
      currentScore += dice;

      // Show 'currentScore' of 'acitvePlayer'
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch the player
      switchPlayer();
    }
  }
};
const btnHoldEvents = function () {
  if (playing) {
    // 1] Add 'currentScore' to the 'score'
    scores[activePlayer] += currentScore;

    // 2] Display 'score'
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2] Check if 'score >= 100'
    if (scores[activePlayer] >= 100) {
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
    }
  }
};

btnRoll.addEventListener('click', btnRollEvents);

btnHold.addEventListener('click', btnHoldEvents);

btnNew.addEventListener('click', init);
