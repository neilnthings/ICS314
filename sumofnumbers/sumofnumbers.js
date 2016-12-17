/**
 * Solving Experience E26
 * Created by neil on 9/18/2016.
 */
const testArray = [1, 2, 3, 4, 5];

function sumFor(list) {
  let total = 0;

  for (let count = 0; count < list.length; count += 1) {
    total += list[count];
  }

  return total;
}

function sumWhile(list) {
  let count = 0;
  let total = 0;

  while (count < list.length) {
    total += list[count];

    count += 1;
  }

  return total;
}

function sumRecursion(list, listLength) {
  let total = 0;

  if (listLength === 1) {
    total += list[listLength - 1];
  } else {
    total = list[listLength - 1] + sumRecursion(list, listLength - 1);
  }

  return total;
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function sumUp(val, num) { return val + num; }, 0);
}

console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray, testArray.length));
console.log(sumTheSimpleWay(testArray));
