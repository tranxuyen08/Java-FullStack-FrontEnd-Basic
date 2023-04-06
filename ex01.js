function arrayColor() {
  myColor = ["Red", "Green", "White", "Black"];
  let string = myColor.join('-')
  console.log(string);
}
// const fruits = ['apple', 'bannana', 'orange', 'mango', 'blueberry', 'strawbery'];
// const fruitList = document.querySelector('.list-fruit')
// let contentFruitList = ''
// for (const fruit of fruits) {
//   contentFruitList += `<li>${fruit}</li>`
// }
// fruitList.innerHTML = contentFruitList

function bai2() {
  array = [2, 4, 3, 5, 7, 6, 8]
  let num = array.join("")
  const result = [num[0]];
  for (i = 1; i < num.length; i++) {
    if (num[i - 1] % 2 == 0 && num[i] % 2 == 0) {
      result.push('-', num[i])
    } else {
      result.push(num[i]);
    }
  }
  console.log(result);
}
function convertString(element) {
  let result_2 = document.querySelector("#result_text");
  const str = element.value;
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let converStr = "";
  for (const word of str) {
    if (UPPER.includes(word)) {
      converStr += word.toLowerCase();
    } else {
      converStr += word.toUpperCase();
    }
    result_2.innerHTML = converStr;
  }
}