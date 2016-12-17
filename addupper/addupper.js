/**
 * ICS314 In-class WOD
 * Created by neil on 9/22/16.
 */
const testList1 = ['apple', 'pear'];
const testList2 = ['you', 'can', 'win'];

function addlength(list) {
  return _.map(list, function concatme(string) { return string + ' ' + string.toUpperCase(); });
}

console.log(addlength(testList1));
console.log(addlength(testList2));
