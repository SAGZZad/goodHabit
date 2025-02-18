const habit = [
  {
    imgages: "assets/images/5d38416977442.jpg",
    title: "Бег",
    description: "Утренний бег — это заряд энергии и здоровье!",
  },
  {
    imgages: "assets/images/i (1).webp",
    title: "Вода",
    description: "Пей 2 литра воды в день для здоровья и бодрости.",
  },
  {
    imgages: "assets/images/i.webp",
    title: "Книги",
    description: "Читай 30 минут в день, чтобы развиваться и узнавать новое.",
  },
];

const ul = document.getElementById('ul');
const template = document.getElementById('template').content;
const titlInput = document.getElementById('habit-title');
const descriptionInput = document.getElementById('habit-description');
const imageInput = document.getElementById('habit-image');
const add = document.getElementById('add-habit');
const addVso = document.getElementById('add-habit-svo');

// Функция для удаления элемента
function deleteHabit(event) {
  const li = event.target.parentElement; // Находим родительский элемент <li>
  ul.removeChild(li); // Удаляем <li> из <ul>
}

// Функция для отметки выполнения
function toggleCompleted(event) {
  event.target.classList.toggle('completed'); // Переключаем класс "completed"
}

// Функция для добавления привычки
function addHabit(title, description, image) {
  const addClon = template.cloneNode(true);
  addClon.querySelector(".h4tit").textContent = title;
  addClon.querySelector(".ptit").textContent = description;
  addClon.querySelector(".imgtit").src = image;

  // Добавляем обработчик для кнопки удаления
  const delBut = addClon.querySelector('.but-deltit');
  delBut.addEventListener('click', deleteHabit);

  // Добавляем обработчик для кнопки "Выполнено"
  const doneBut = addClon.querySelector('.buttit');
  doneBut.addEventListener('click', toggleCompleted);

  ul.appendChild(addClon);
}

// Инициализация списка привычек
function initHabits() {
  habit.forEach((item) => {
    addHabit(item.title, item.description, item.imgages);
  });
}

// Обработчик для добавления новой привычки
add.addEventListener('click', () => {
  const titl = titlInput.value;
  const description = descriptionInput.value;
  const image = imageInput.value;
  addHabit(titl, description, image);
});

// Обработчик для удаления всех привычек
addVso.addEventListener('click', () => {
  const cards = ul.querySelectorAll('li');
  // Перебираем карточки и удаляем каждую
  cards.forEach(card => {
    card.remove();
  });
});

// Инициализация
initHabits();