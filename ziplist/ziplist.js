/**
 * SOLVING E27
 * Created by neil on 9/18/2016.
 */
const testArray1 = ['a', 'b', 'c'];
const testArray2 = [1, 2, 3];

function zipList(list1, list2) {
  const returnArray = [];

  for (let count = 0; count < list1.length; count += 1) {
    returnArray.push(list1[count]);

    returnArray.push(list2[count]);
  }

  return returnArray;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(testArray1, testArray2));
console.log(zipListTheSimpleWay(testArray1, testArray2));
