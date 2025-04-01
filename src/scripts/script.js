// const habit = [
//   {
//     imgages: "../src/assets/5d38416977442.jpg",
//     title: "Бег",
//     description: "Утренний бег — это заряд энергии и здоровье!",
//   },
//   {
//     imgages: "../src/assets/i (1).webp",
//     title: "Вода",
//     description: "Пей 2 литра воды в день для здоровья и бодрости.",
//   },
//   {
//     imgages: "../src/assets/i.webp",
//     title: "Книги",
//     description: "Читай 30 минут в день, чтобы развиваться и узнавать новое.",
//   },
// ];

// const ul = document.getElementById('ul');
// const template = document.getElementById('template').content;
// const titlInput = document.getElementById('habit-title');
// const descriptionInput = document.getElementById('habit-description');
// const imageInput = document.getElementById('habit-image');
// const add = document.getElementById('add-habit');
// const addVso = document.getElementById('add-habit-svo');


// // Функция для удаления элемента
// function deleteHabit(event) {
//   const li = event.target.parentElement; // Находим родительский элемент <li>
//   ul.removeChild(li); // Удаляем <li> из <ul>
// }

// // Функция для отметки выполнения
// function toggleCompleted(event) {
//   event.target.classList.toggle('completed'); // Переключаем класс "completed"
// }

// // Функция для добавления привычки
// function addHabit(title, description, image) {
//   const addClon = template.cloneNode(true);
//   addClon.querySelector(".h4tit").textContent = title;
//   addClon.querySelector(".ptit").textContent = description;
//   addClon.querySelector(".imgtit").src = image;

//   // Добавляем обработчик для кнопки удаления
//   const delBut = addClon.querySelector('.but-deltit');
//   delBut.addEventListener('click', deleteHabit);

//   // Добавляем обработчик для кнопки "Выполнено"
//   const doneBut = addClon.querySelector('.buttit');
//   doneBut.addEventListener('click', toggleCompleted);

//    // Добавляем обработчик для кнопки "Редактировать"
//    const editBut = addClon.querySelector('.buttit-rev');
//    editBut.addEventListener('click', () => openEditModal(addClon, title, description, image));
 

//   ul.appendChild(addClon);
// }


// // Инициализация списка привычек
// function initHabits() {
//   habit.forEach((item) => {
//     addHabit(item.title, item.description, item.imgages);
//   });
// }

// // Обработчик для добавления новой привычки
// add.addEventListener('click', () => {
//   const titl = titlInput.value;
//   const description = descriptionInput.value;
//   const image = imageInput.value;
//   addHabit(titl, description, image);
// });

// // Обработчик для удаления всех привычек
// addVso.addEventListener('click', () => {
//   const cards = ul.querySelectorAll('li');
//   // Перебираем карточки и удаляем каждую
//   cards.forEach(card => {
//     card.remove();
//   });
// });


// // Инициализация
// initHabits();
// //2 практиика 
// // Функция для открытия модального окна редактирования
// function openEditModal(liElement, currentTitle, currentDescription, currentImage) {
//   const modal = document.getElementById('editModal');
//   const editTitle = document.getElementById('edit-title');
//   const editDescription = document.getElementById('edit-description');
//   const editImage = document.getElementById('edit-image');
  
//   // Заполняем поля текущими значениями
//   editTitle.value = currentTitle;
//   editDescription.value = currentDescription;
//   editImage.value = currentImage;
  
//   // Показываем модальное окно
//   modal.style.display = 'block';
  
//   // Функция для закрытия модального окна
//   const closeModal = function() {
//     modal.style.display = 'none';
//   };
  
//   // Обработчик для кнопки закрытия
//   document.querySelector('.close-btn').onclick = closeModal;
  
//   // Обработчик для кнопки отмены
//   document.getElementById('cancel-edit').onclick = closeModal;
  
//   // Обработчик для формы редактирования
//   const handleSubmit = function(event) {
//     event.preventDefault();
    
//     // Получаем новые значения
//     const newTitle = editTitle.value.trim();
//     const newDescription = editDescription.value.trim();
//     const newImage = editImage.value.trim();
    
//     // Находим актуальный элемент в DOM
//     const cards = ul.querySelectorAll('li');
//     let actualCard = null;
    
//     cards.forEach(card => {
//       if (card.querySelector('.h4tit').textContent === currentTitle &&
//           card.querySelector('.ptit').textContent === currentDescription) {
//         actualCard = card;
//       }
//     });
    
//     if (actualCard) {
//       // Обновляем данные в реальной карточке
//       actualCard.querySelector(".h4tit").textContent = newTitle;
//       actualCard.querySelector(".ptit").textContent = newDescription;
//       actualCard.querySelector(".imgtit").src = newImage;
      
//       // Обновляем обработчик редактирования для новой карточки
//       const editBtn = actualCard.querySelector('.buttit-rev');
//       editBtn.onclick = () => openEditModal(actualCard, newTitle, newDescription, newImage);
//     }
    
//     // Закрываем модальное окно
//     closeModal();
    
//     // Удаляем обработчик после использования
//     document.getElementById('editForm').removeEventListener('submit', handleSubmit);
//   };
  
//   // Добавляем обработчик события
//   document.getElementById('editForm').addEventListener('submit', handleSubmit);
// }
