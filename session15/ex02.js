function mang2Chieu() {
  let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
  ];
  for (const i in arr) {
    console.log('row' + i);
    for (const j in arr) {
      console.log(arr[i][j]);
    }
  }
}
function reveArr() {
  const arr = ['c', 's', 'c', '2', '6', '1']
  let rever = arr.reverse();
  let str = rever.join("");
  console.log(str);
  console.log(rever);
}

function printfNum() {
  const arr = ['1', 't', 'r', 's', '4', 's']
  count = 0
  for (const a of arr) {
    let b = isNaN(a)
    if (b == false) {
      count++
    }
  }
  console.log("Số ký tự số trong chuỗi: " + count)
}
function countWord() {
  const str = 'Xin chào đây là function đếm số từ trong một chuỗi'
  // let newArr = str.split(/\s+/)
  countStr = 0
  for (const a of str) {
    countStr++
  }
  console.log('có tổng cộng '+ countStr + ' từ trong một chuỗi')

}
function compareStr(){
  let str1 = document.querySelector('.input-string1').value
  let str2 = document.querySelector('.input-string2').value
  let show = ''
  if(str1 == str2){
    alert ('2 chuỗi string giống nhau')
  }else{
    alert('2 chuỗi string khong giống nhau')
  }
  console.log(str1);
  console.log(str2);
}