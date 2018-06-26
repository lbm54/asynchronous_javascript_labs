// let i;
// function message() {
//     i = 4;
//     console.log(`i is ${i}`);
// }
// message();
// function multiply() {
//     i *= 4;
//     console.log(`i is ${i}`);
// }
// setTimeout( () => {
//     multiply();
// }, 2000);

// function getWords() {
//     console.log('word1');
//     setTimeout( () => {
//         console.log('word2');
//     }, 2000);
//     setTimeout( () => {
//         console.log('word3');
//     }, 0);
//     console.log('word4');
//     //predicting word1, word4, word3, word2
// }
// getWords();

// function countdown(num, callback) {
//     for (i = num; i >= 0; i--) {
//         console.log(i);
//     }
//     return callback();
// }
// function done() {
//     console.log('done');
// }
// countdown(5, done);

// let bool = true;
// let orderingChickenSandwich = new Promise( (resolve, reject) => {
//     let newObject = {
//         sandwich: 'chicken',
//         veggies: 'lettuce'
//     }
//     resolve(newObject);
// });
// let orderFood = function() {
//     orderingChickenSandwich.then((response) => console.log(response));
// }
// orderFood();

let newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1");
    return resolve(1);
  }, 2000);
})
  .then((result) => {
    result *= 2;
    console.log(result);
    return result;
  })
  .then(result => {
    result *= 4;
    console.log(result);
    return result;
  })
  .then(result => {
    result *= 6;
    console.log(result);
    return result;
  });
