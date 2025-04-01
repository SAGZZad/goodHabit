import { addHabit } from './dom.js';

const ul = document.getElementById('ul');

export function openEditModal(liElement, currentTitle, currentDescription, currentImage) {
  const modal = document.getElementById('editModal');
  const editTitle = document.getElementById('edit-title');
  const editDescription = document.getElementById('edit-description');
  const editImage = document.getElementById('edit-image');
  
  editTitle.value = currentTitle;
  editDescription.value = currentDescription;
  editImage.value = currentImage;
  
  modal.style.display = 'block';
  
  const closeModal = function() {
    modal.style.display = 'none';
  };
  
  document.querySelector('.close-btn').onclick = closeModal;
  document.getElementById('cancel-edit').onclick = closeModal;
  
  const handleSubmit = function(event) {
    event.preventDefault();
    
    const newTitle = editTitle.value.trim();
    const newDescription = editDescription.value.trim();
    const newImage = editImage.value.trim();
    
    const cards = ul.querySelectorAll('li');
    const  actualCard = null;
    
    cards.forEach(card => {
      if (card.querySelector('.h4tit').textContent === currentTitle &&
          card.querySelector('.ptit').textContent === currentDescription) {
        actualCard = card;
      }
    });
    
    if (actualCard) {
      actualCard.querySelector(".h4tit").textContent = newTitle;
      actualCard.querySelector(".ptit").textContent = newDescription;
      actualCard.querySelector(".imgtit").src = newImage;
      
      const editBtn = actualCard.querySelector('.buttit-rev');
      editBtn.onclick = () => openEditModal(actualCard, newTitle, newDescription, newImage);
    }
    
    closeModal();
    document.getElementById('editForm').removeEventListener('submit', handleSubmit);
  };
  
  document.getElementById('editForm').addEventListener('submit', handleSubmit);
}