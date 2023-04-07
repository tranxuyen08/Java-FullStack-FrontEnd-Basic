let listTodo = document.querySelector('.todo-list')
function todoApp() {
  let todo = document.querySelector('.input-todo')
  listTodo.innerHTML += `<li class="todo-item"> ${todo.value}
                          <div>
                            <button class="btn-update" onclick="updateTodo('${todo.value}')" href="#">Update</button>
                            <button class="btn-delete" onclick="deleteTodo(this)" href="#">Delete</button>
                          </div>
                        </li>`

  render("")
}
function updateTodo(element){
  render(element)
  const buttonAdd = document.querySelector('.btn-primary')
  const buttonUpdate = document.querySelector('.btn-secondary')
  console.log(buttonUpdate);
  buttonAdd.classList.add('btn-hidden')
  buttonUpdate.classList.remove('btn-hidden')
}
function updateText(e){
  let btnUpdate = document.querySelector('.input-todo').value;
  render(btnUpdate)

  console.log(btnUpdate);
}
function deleteTodo(){
  alert('delete')
}
function render(value){
  const todoRender = document.querySelector('.input-todo')
  todoRender.value = value
  console.log(value);
}
