function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

const pushExerciseSelection = document.getElementById('push-selection');
const pushExerciseDifficulty = document.getElementById('push-difficulty');

const hingeExerciseSelection = document.getElementById('hinge-selection');
const hingeExerciseDifficulty = document.getElementById('hinge-difficulty');

const pullExerciseSelection = document.getElementById('pull-selection');
const pullExerciseDifficulty = document.getElementById('pull-difficulty');

const squatExerciseSelection = document.getElementById('squat-selection');
const squatExerciseDifficulty = document.getElementById('squat-difficulty');

const coreExerciseSelection = document.getElementById('core-selection');
const coreExerciseDifficulty = document.getElementById('core-difficulty');

const intervalsExerciseSelection = document.getElementById(
  'intervals-selection'
);
const intervalsExerciseDifficulty = document.getElementById(
  'intervals-difficulty'
);

const pushLeftIn = document.getElementById('exercise-left-in-tank-push');
const hingeLeftIn = document.getElementById('exercise-left-in-tank-hinge');
const pullLeftIn = document.getElementById('exercise-left-in-tank-pull');
const squatLeftIn = document.getElementById('exercise-left-in-tank-squat');
const coreLeftIn = document.getElementById('exercise-left-in-tank-core');

var pushExercises = [
  'Pushup',
  'Bench Press',

  'Bench Press',
  'Overhead Press',
  'Overhead Press',
  'Tricep Extension',
  'T-Pushups',
];

var pushRpe = [
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',

  '8',
  '6',
  '6',
  '6',
  '10',
  '9',
  '9',
];

var randomPush =
  pushExercises[Math.floor(Math.random() * pushExercises.length)];
console.log(randomPush);

var randomPushRpe = pushRpe[Math.floor(Math.random() * pushExercises.length)];
console.log(randomPushRpe);

var pushLeftInTank = 10 - randomPushRpe;
console.log(pushLeftInTank);

pushExerciseSelection.innerHTML = randomPush;
pushExerciseDifficulty.innerHTML = randomPushRpe;
pushLeftIn.innerHTML = pushLeftInTank;

//  =============== squat/quad exercises ========================================

var squatExercises = [
  'Squat',
  'Lunge',
  'Split Squat',
  'Squat',
  'Lunge',
  'Split Squat',
  'Knee Extension',
  'Leg Press',
  'Single Leg Squat',
  'Leg Press',
  'Single Leg Squat',
];

var squatRpe = [
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',

  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '9',
  '9',
];

var randomSquat =
  squatExercises[Math.floor(Math.random() * squatExercises.length)];
console.log(randomSquat);

var randomSquatRpe =
  squatRpe[Math.floor(Math.random() * squatExercises.length)];
console.log(randomSquatRpe);

var squatLeftInTank = 10 - randomSquatRpe;
console.log(squatLeftInTank);

squatExerciseSelection.innerHTML = randomSquat;
squatExerciseDifficulty.innerHTML = randomSquatRpe;
squatLeftIn.innerHTML = squatLeftInTank;

//  ============================ pull/back exercises ============================

var pullExercises = [
  'Pull-up',
  'Pull-down',
  'Row',
  'Row',
  'Row',
  'Reverse Fly',
  'Curl',
];

var pullRpe = [
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',

  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '8',
  '6',
  '6',
  '6',
  '10',
  '9',
  '10',
  '9',
];

var randomPull =
  pullExercises[Math.floor(Math.random() * pullExercises.length)];
console.log(randomPull);

var randomPullRpe = pullRpe[Math.floor(Math.random() * pullExercises.length)];
console.log(randomPullRpe);

var pullLeftInTank = 10 - randomPullRpe;
console.log(pullLeftInTank);

pullExerciseSelection.innerHTML = randomPull;
pullExerciseDifficulty.innerHTML = randomPullRpe;
pullLeftIn.innerHTML = pullLeftInTank;

//  ============= hinge/deadlift/booty exercises =============================

var hingeExercises = [
  'Deadlift',
  'Glute Bridge',
  'Leg Curl',
  'Single Leg Deadlift',
  'Single Leg Glute Bridge',
  'Single Leg Squat',
];

var hingeRpe = [
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',

  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '8',
  '6',
  '6',
  '6',
  '10',
  '9',
  '10',
  '9',
];

var randomHinge =
  hingeExercises[Math.floor(Math.random() * hingeExercises.length)];
console.log(randomHinge);

var randomHingeRpe =
  hingeRpe[Math.floor(Math.random() * hingeExercises.length)];
console.log(randomHingeRpe);

var hingeLeftInTank = 10 - randomHingeRpe;
console.log(hingeLeftInTank);

hingeExerciseSelection.innerHTML = randomHinge;
hingeExerciseDifficulty.innerHTML = randomHingeRpe;
hingeLeftIn.innerHTML = hingeLeftInTank;

//  ========================================= core exercises ====================================================================================

var coreExercises = [
  'V-Up',
  'Chop/Lift',
  'Side Lying Leg Raise',
  'Hanging Leg Raise',
  'Pushup Shoulder Taps',
  'Windshield Wipers',
];

var coreRpe = [
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',
  '7',
  '7',
  '7',
  '7',
  '8',
  '6',
  '6',
  '6',

  '8',
  '6',
  '6',
  '6',
  '10',
  '9',
  '9',
];

var randomCore =
  coreExercises[Math.floor(Math.random() * coreExercises.length)];
console.log(randomCore);

var randomCoreRpe = coreRpe[Math.floor(Math.random() * coreExercises.length)];
console.log(randomCoreRpe);

var coreLeftInTank = 10 - randomCoreRpe;
console.log(coreLeftInTank);

coreExerciseSelection.innerHTML = randomCore;
coreExerciseDifficulty.innerHTML = randomCoreRpe;
coreLeftIn.innerHTML = coreLeftInTank;

// ========= exercise selection will be done via dropdown ===========
// var intervalsExercises = [
//   'V-Up',
//   'Chop/Lift',
//   'Side Lying Leg Raise',
//   'Hanging Leg Raise',
//   'Pushup Shoulder Taps',
//   'Windshield Wipers',
// ];

// var intervalsExercises = [
//   {
//     work: ':15',
//     rest: '1:45',
//     timer: url(),
//   },
//   {
//     work: ':30',
//     rest: '1:00',
//     timer: url(),
//   },
//   {
//     work: '1:00',
//     rest: '2:00',
//     timer: url(),
//   },
//   {
//     work: '1:30',
//     rest: '1:30',
//     timer: url(),
//   },
//   {
//     work: '2:00',
//     rest: '1:00',
//     timer: url(),
//   },
// ];

// var intervalsRpe = [
//   '7',
//   '7',
//   '7',
//   '7',
//   '8',
//   '6',
//   '6',
//   '6',
//   '7',
//   '7',
//   '7',
//   '7',
//   '8',
//   '6',
//   '6',
//   '6',
//   '7',
//   '7',
//   '7',
//   '7',
//   '8',
//   '6',
//   '6',
//   '6',

//   '8',
//   '6',
//   '6',
//   '6',
//   '10',
//   '9',
//   '9',
// ];

// var randomIntervals =
//   intervalsExercises[Math.floor(Math.random() * intervalsExercises.length)];
// console.log(randomIntervals);

// var randomIntervalsRpe =
//   intervalsRpe[Math.floor(Math.random() * intervalsExercises.length)];
// console.log(randomIntervalsRpe);

// var intervalsLeftInTank = 10 - randomIntervalsRpe;
// console.log(intervalsLeftInTank);

// intervalsExerciseSelection.innerHTML = randomIntervals;
// intervalsExerciseDifficulty.innerHTML = randomIntervalsRpe;
// intervalsLeftIn.innerHTML = intervalsLeftInTank;

//  =========================== may come back to obkect in future. right now,
// array works the best

// for (const exercise in pushExercises) {
//   console.log(pushExercises[exercise])
// }

// const values = Object.values(pushExercises)
// const randomPush = values[Math.floor(Math.random() * values.length)]
// console.log(randomPush);

// let squatExercises = [
//   {
//     exercise: "Squat"
//   },
//   {
//     exercise: "Lunge"
//   },
//   {
//     exercise: "Leg Press"
//   },
//   {
//     exercise: "Knee Extension"
//   },
//   {
//     exercise: "Single Leg Squat"
//   }
// ]
