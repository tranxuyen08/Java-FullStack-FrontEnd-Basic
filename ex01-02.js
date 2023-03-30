let toan = 5;
let hoa = 5;
let sinh = 5;
tong = (toan + hoa + sinh) / 3;
console.log("diem trung binh", tong);


let banKinh = 50;
let pi = 3.14
let dienTichHinhTron = banKinh * banKinh * pi
let chuViHinhTron = (banKinh * 2) * pi
console.log("dien tich hinh tron la:", dienTichHinhTron, "cm");
console.log('chu vi hinh tron la:', chuViHinhTron, "cm");

let oC = 19;
let oF = oC * 1.8000 + 32.000
console.log('voi', oC, 'oC thi duoc doi thanh', oF, 'oF');

function changeMoney(e) {

}
const btn = document.getElementById('changebutton')

function changeValue() {
  const fromCur = document.getElementById('from').value
  const toCur = document.getElementById('to').value
  if (fromCur == '') {
    alert('Bạn Cần Nhập Mệnh Giá Qui Đổi')
  } else if (fromCur == 'vnd') {
    const dollar = 'USD'
    let denominations = document.getElementById('denominations').value
    denominations = dollar;
    document.getElementById('denominations').innerText = denominations
  } else if (fromCur == 'usd') {
    let vietNamDong = "VND"
    let denominations = document.getElementById('denominations').value
    denominations = vietNamDong;
    document.getElementById('denominations').innerText = denominations
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const amount = document.getElementById('amount').value;
  const fromCur = document.getElementById('from').value;
  if (fromCur == 'usd') {
    let money = amount * 23000
    console.log(money,'.000');
    let result = document.getElementById('result').value = money
    document.getElementById('result').innerText = money
  }else{
    money = amount / 23000
    console.log(money);
    let result = document.getElementById('result').value = money
    document.getElementById('result').innerText = money

  }
})