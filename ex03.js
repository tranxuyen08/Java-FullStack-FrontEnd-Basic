function caculator(element) {
  let firstNum = Number(document.getElementById('firstNum').value);
  let seconNum = Number(document.getElementById('seconNum').value);
  let add = document.getElementById('add').value;
  let sub = document.getElementById('sub').value;
  let multi = document.getElementById('multi').value;
  let divi = document.getElementById('divi').value;
  if(element.value == add){
    let total = firstNum + seconNum
    document.getElementById('total').innerHTML = 'Result Division:' + total
  }else if(element.value == sub){
    let total = firstNum - seconNum
    document.getElementById('total').innerHTML = 'Result Division:' + total
  }else if(element.value == multi){
    let total = firstNum * seconNum
    document.getElementById('total').innerHTML = 'Result Division:' + total
  }else{
    let total = firstNum / seconNum
    document.getElementById('total').innerHTML = 'Result Division:' + total
  }

}