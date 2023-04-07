function numMax(){
  let arr = [1, 2,4,5,8,13,9,11,23,52]
  let count = 0;
  let countNum = document.querySelector('.count-num')
  let numMax = document.querySelector('.find-max')
  let showCountNum = ''
  let max = Math.max(...arr)
  for (const num of arr) {
    if(Number(num) > 10){
      count +=1
      showCountNum += num + " "
    }
  }
  countNum.innerHTML ='số lơn nhất trong mảng là ' + max
  numMax.innerHTML ='có tổng cộng '+ count +' phần tử lớn hơn 10 trong mảng la ' + showFindMax
  console.log('số lơn nhất trong mảng là ' + max);
  console.log('có tổng cộng '+ count +' phần tử lớn hơn 10 trong mảng');
}
function sumMax(){
  const arr = [1, 2,4,5,8,13,9,11,23,52]
  let max = Math.max(...arr)
  let sumArray = document.querySelector('.sum-arr')
  let finMax = document.querySelector('.find-max')
  let count = 0
  finMax.innerHTML = 'số lơn nhất trong mảng là ' + max
  for (const i of arr) {
      count++
  }
  console.log(count);

  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / count;
  sumArray.innerHTML = "giá trị trung bình của mảng" + sum;
}
function reverNum(){
  const arr = [1, 2,4,5,8,13,9,11,23,52]
  let reveArray = document.querySelector('.show-arr')
  reversedArr = arr.reverse();
  // console.log(reversedArr);
  reveArray.innerHTML = 'arrNew[' + reversedArr + ']'
}
function countNumStr(){
  const str = document.querySelector('.inp-text').value
  let changeStr = str.toLowerCase()
  console.log(list(changeStr));
  let nguyenAm = ['u','e','o','a','i']
  console.log(nguyenAm);
  count = 0
  for (const i = 0; i < changeStr.lenght; i++) {
      console.log(i);
      if(i == nguyenAm){
        count+= 1
      }

  }

  console.log(count);
}
function numInArr(){
  const arr = [1, 2,4,5,8,13,9,11,23,52]
  let numberX = prompt('nhập vào số:','')
  for (const num of arr) {
    if(numberX == num){
      alert("Number X is in the array")
      break;
    }else{
      alert("Number X is not in the array")
    }
  }
}
 function arrDesc(){
  const arr = [1, 2,4,5,8,13,9,11,23,52]
  arr.sort(function(a,b){
    return b - a;
  })
  console.log(arr);
 }
 function baiTap9(){
  const a = ['1','2','3','7','9']
  const b = ['5','4','6','1','2']
  let c = a.concat(b)
  console.log(c);
 }