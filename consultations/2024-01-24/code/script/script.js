// раскрасить все input в бледно-синий цвет
// найдёт только первый элемент, поэтому нам не подходит
// const input = document.querySelector('input');

// document.querySelectorAll - возвращает массив элементов
const inputs = document.querySelectorAll('input');

// чтобы изменить каждый элемент вызываем метод forEach
inputs.forEach((input) => {
  input.style.backgroundColor = '#b8cbff';
});

// document.querySelector - метод для поиска элемента в документе
// #addForm - селектор формы с id 'addForm'
const formNode = document.querySelector('#addForm');

//console.log(formNode);
const tasks = [];

// просим форму запустить коллбэк в тот момент когда форма будет отправлена
// event - параметр коллбэка, объект содержащий разные свойства события
// 'submit' - название события (отправка)
// formNode - объект, на котором происходит событие
// получается, что здесь мы слушаем событие отправки формы
formNode.addEventListener('submit', (event) => {
  console.log('submit');

  // отменяем стандартное действие при отправке формы (перезагрузка страницы)
  event.preventDefault();

  // // console.log("submited!");
  // //!console.log(event.target.title.value);

  // event.target - объект на котором происходит событие
  const form = event.target;

  // получаем инпуты по их именам. Инпуты будут лежать внутри объекта формы:
  const titleInput = form.title;
  const employeeInput = form.employee;
  const priceInput = form.price;

  // value - это текст, который записан в инпут
  const title = titleInput.value;
  const employee = employeeInput.value;

  // приводим price к числу (так как в инпутах всегда записаны строки)
  // const price = Number(priceInput.value);
  const price = +priceInput.value;

  // создаём объект task
  const task = {
    title,
    employee,
    price,
  };

  tasks.push(task);

  console.log(tasks);

  form.reset();

  // const title = event.target.title.value;
  // const employee = event.target.employee.value;
  // const price = +event.target.price.value;

  // //console.log(title);
  // //const task = {title: title,employee: employee,price: +price};
  // //const task = { title,employee,price,price};
  // //tasks.push(task);
  // tasks.push({ title, employee, price, price });
  // console.log(tasks);
  // event.target.reset();
});

// document.querySelector('#show-form-button')
const showFormButton = document.getElementById('show-form-button');

// когда пользователь кликнул на кнопку
showFormButton.addEventListener('click', (event) => {
  // что произойдёт:
  // показываем форму
  formNode.style.display = '';
  // скрываем кнопку
  showFormButton.style.display = 'none';
});

// найти объект -> отследить событие (addEventListener) -> сделать что-то в ответ на это событие
