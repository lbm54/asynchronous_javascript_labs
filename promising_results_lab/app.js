slowMath.add(6, 2).then(function(value) {
    console.log(value);
    return slowMath.multiply(value, 2);
  })
  .then(function(value) {
    console.log(value);
    return slowMath.divide(value, 4);
  })
  .then(function(value) {
    console.log(value);
    return slowMath.subtract(value, 3);
  })
  .then(function(value) {
    console.log(value);
    return slowMath.add(value, 98);
  })
  .then(function(value) {
    console.log(value);
    return slowMath.remainder(value, 2);
  })
  .then(function(value) {
    console.log(value);
    return slowMath.multiply(value, 50);
  })
  .then(function(value) {
    console.log(value);
    return slowMath.remainder(value, 40);
  })
  .then(function(value) {
    console.log(value);
    return slowMath.add(value, 32);
  })
  .then(function(value) {
    console.log(`The final result is ${value}`);
  })
  .catch(function(error) {
    console.log(error);
  });
