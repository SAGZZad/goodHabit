// добавление и удаление карточек привычек на странице.
import { openEditModal } from "./modal.js";
import { habits } from './data.js';

const ul = document.getElementById("ul");
const template = document.getElementById("template").content;

// Функция для удаления элемента
export function deleteHabit(event) {
  const li = event.target.parentElement; // Находим родительский элемент <li>
  ul.removeChild(li); // Удаляем <li> из <ul>
}

// Функция для отметки выполнения
export function toggleCompleted(event) {
  event.target.classList.toggle("completed"); // Переключаем класс "completed"
}

// Функция для добавления привычки
export function addHabit(title, description, image) {
  const addClon = template.cloneNode(true);
  addClon.querySelector(".h4tit").textContent = title;
  addClon.querySelector(".ptit").textContent = description;
  addClon.querySelector(".imgtit").src = image;

  // Добавляем обработчики
  const delBut = addClon.querySelector(".but-deltit");
  delBut.addEventListener("click", deleteHabit);

  const doneBut = addClon.querySelector(".buttit");
  doneBut.addEventListener("click", toggleCompleted);

  const editBut = addClon.querySelector(".buttit-rev");
  editBut.addEventListener("click", () =>
    openEditModal(addClon, title, description, image)
  );

  ul.appendChild(addClon);
}

// Инициализация списка привычек
export function initHabits() {
    habits.forEach((item) => { 
      addHabit(item.title, item.description, item.imgages);
    });
  }

// Функция для удаления всех привычек
export function clearAllHabits() {
  const cards = ul.querySelectorAll("li");
  cards.forEach((card) => card.remove());
}