function transelate() {
  const English = ['hello', 'bye', 'good', 'teacher']
  const Vietlish = ['xin chào', 'tạm biệt', 'tốt', 'giáo viên']
  let inputTransele = prompt('nhập vao tiếng việt', "").toLowerCase()
  let showText = document.querySelector('#show-transelate')
  console.log(inputTransele);
  let result = ""
  for (i = 0; i < Vietlish.length; i++) {
    if (inputTransele == Vietlish[i]) {
      result = English[i]
      showText.innerHTML = result
      break;
    } else {
      alert('no')
      break;
    }
  }

}
