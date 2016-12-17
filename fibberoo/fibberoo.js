/**
 * WOD inclass practice
 * Created by neil on 9/20/16.
 */
function fibberoo(num) {
  let num1 = 0;
  let num2 = 1;
  let tempNum = 0;
  let box = [];

  for (let count = 0; count < num; count += 1) {
    box.push(num1);
    tempNum = num1 + num2;
    num1 = num2;
    num2 = tempNum;
  }

  return box;
}

console.log(fibberoo(50));
