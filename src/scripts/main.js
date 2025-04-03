import { habits } from './data.js';
import { addHabit, initHabits, clearAllHabits } from './dom.js';
import "../style/style.css"


const titlInput = document.getElementById('habit-title');
const descriptionInput = document.getElementById('habit-description');
const imageInput = document.getElementById('habit-image');
const add = document.getElementById('add-habit');
const addVso = document.getElementById('add-habit-svo');

// Инициализация
initHabits(habits);

// Обработчик добавления привычки
add.addEventListener('click', () => {
  const titl = titlInput.value;
  const description = descriptionInput.value;
  const image = imageInput.value;
  
  // Добавляем привычку
  addHabit(titl, description, image);
  
  // Очищаем поля ввода
  titlInput.value = '';
  descriptionInput.value = '';
  imageInput.value = '';
  
  // Можно добавить фокус на первое поле
  
});

// Обработчик для удаления всех привычек
addVso.addEventListener('click', clearAllHabits);

