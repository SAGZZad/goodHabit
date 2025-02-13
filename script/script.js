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
  
  function habitadd() {
    habit.forEach((item) => {
      const clon = template.cloneNode(true);
      //глубокое копирование 
      clon.querySelector(".h4tit").textContent = item.title;
      clon.querySelector(".ptit").textContent = item.description;
      clon.querySelector(".imgtit").src = item.imgages;
    //для чего 
     
  
      // Добавляем обработчик для кнопки удаления
      const delBut = clon.querySelector('.but-deltit');
      delBut.addEventListener('click', () => {
        const li = delBut.parentElement; // Находим родительский элемент <li>
        ul.removeChild(li); // Удаляем <li> из <ul>
      });
      //parentElement — это свойство DOM-элемента, которое возвращает его родительский элемент в DOM-дереве.
  
      // Добавляем обработчик для кнопки "Выполнено"
      const doneBut = clon.querySelector('.buttit');
      doneBut.addEventListener('click', () => {
        doneBut.classList.toggle('completed'); // Переключаем класс "completed"
      });
  
      ul.appendChild(clon);
      //добовляет в конец списка дочерних элементов (ul)
      
    });
  }
  
  habitadd();
  
  add.addEventListener('click', () => {
    const titl = titlInput.value;
    const description = descriptionInput.value;
    const image = imageInput.value;
    const addClon = template.cloneNode(true);
    addClon.querySelector(".h4tit").textContent = titl;
    addClon.querySelector(".ptit").textContent = description;
    addClon.querySelector(".imgtit").src = image;
  
    // Добавляем обработчик для кнопки удаления
    const delBut = addClon.querySelector('.but-deltit');
    delBut.addEventListener('click', () => {
      const li = delBut.parentElement; // Находим родительский элемент <li>
      ul.removeChild(li); // Удаляем <li> из <ul>
    });
  
    // Добавляем обработчик для кнопки "Выполнено"
    const doneBut = addClon.querySelector('.buttit');
    doneBut.addEventListener('click', () => {
      doneBut.classList.toggle('completed'); // Переключаем класс "completed"
    });
  
    ul.appendChild(addClon);
  });
  
  addVso.addEventListener('click', () => {
    ul.innerHTML = "";
  });
