document.addEventListener('DOMContentLoaded', () => {
    const habitInput = document.getElementById('habit-input');
    const addHabitBtn = document.getElementById('add-habit-btn');
    const habitsList = document.getElementById('habits-list');

    // Начальные привычки
    const initialHabits = [
        "Пить больше воды",
        "Делать зарядку утром",
        "Читать книгу перед сном"
    ];

    // Функция для добавления карточки привычки
    function addHabitCard(text) {
        const habitCard = document.createElement('div');
        habitCard.classList.add('habit-card');

        const habitText = document.createElement('span');
        habitText.textContent = text;

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.textContent = 'Выполнено';
        completeBtn.addEventListener('click', () => {
            habitCard.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', () => {
            habitsList.removeChild(habitCard);
        });

        habitCard.appendChild(habitText);
        habitCard.appendChild(completeBtn);
        habitCard.appendChild(deleteBtn);
        habitsList.appendChild(habitCard);
    }

    // Добавляем начальные привычки
    initialHabits.forEach(habit => addHabitCard(habit));

    // Обработчик для добавления новой привычки
    addHabitBtn.addEventListener('click', () => {
        const habitText = habitInput.value.trim();
        if (habitText !== '') {
            addHabitCard(habitText);
            habitInput.value = '';
        }
    });
});