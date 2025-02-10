// Находим нужные элементы на странице
const habitInput = document.getElementById('habitInput');
const addButton = document.getElementById('addButton');
const habitsContainer = document.getElementById('habitsContainer');

// Массив с начальными привычками
const habits = [
    'Пить 2 литра воды в день',
    'Делать зарядку по утрам',
    'Читать 30 минут в день'
];


// Функция создания новой привычки
function addHabit() {
    // Получаем текст из поля ввода и убираем пробелы
    const text = habitInput.value.trim();
    // Проверяем, что поле не пустое
    if (text === '') {
        alert('Пожалуйста, введите привычку!');
        return;
    }
    // Добавляем привычку в массив
    habits.push(text);
    // Очищаем поле ввода
    habitInput.value = '';
    // Обновляем список привычек на странице
    showHabits();
}


// Функция удаления привычки
function deleteHabit(index) {
    // Спрашиваем подтверждение
    const sure = confirm('Вы уверены, что хотите удалить эту привычку?');
    if (sure) {
        // Удаляем привычку из массива
        habits.splice(index, 1);
        // Обновляем список привычек на странице
        showHabits();
    }
}

// Функция отметки о выполнении
function toggleHabit(card) {
    // Если карточка уже выполнена
    if (card.classList.contains('completed')) {
        card.classList.remove('completed');
        card.querySelector('button').textContent = 'Выполнено';
    } else {
        card.classList.add('completed');
        card.querySelector('button').textContent = 'Отменить';
    }
}

// Функция показа всех привычек
function showHabits() {
    // Очищаем контейнер
    habitsContainer.innerHTML = '';
    
    // Перебираем все привычки
    for (let i = 0; i < habits.length; i++) {
        // Создаем карточку
        const card = document.createElement('div');
        card.className = 'habit-card';
        
        // Создаем заголовок
        const title = document.createElement('h3');
        title.textContent = habits[i];
        
        // Создаем контейнер для кнопок
        const buttons = document.createElement('div');
        buttons.className = 'card-buttons';
        
        // Создаем кнопку выполнения
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Выполнено';
        
        // Добавляем обработчик на кнопку выполнения
        completeBtn.onclick = function(card) {
            return function() {
                toggleHabit(card);
            };
        }(card);
        
        // Создаем кнопку удаления
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';
        
        // Добавляем обработчик на кнопку удаления
        deleteBtn.onclick = function(index) {
            return function() {
                deleteHabit(index);
            };
        }(i);
        
        // Собираем карточку
        buttons.appendChild(completeBtn);
        buttons.appendChild(deleteBtn);
        card.appendChild(title);
        card.appendChild(buttons);
        
        // Добавляем карточку на страницу
        habitsContainer.appendChild(card);
    }
}

// Добавляем обработчик на кнопку добавления привычки
addButton.onclick = addHabit;

// Добавляем обработчик на поле ввода для добавления по Enter
habitInput.onkeypress = function(event) {
    if (event.key === 'Enter') {
        addHabit();
    }
};

// Показываем начальный список привычек
showHabits();