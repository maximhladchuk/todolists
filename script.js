'use strict'

const inputData = document.getElementById('input'),
      list = document.getElementById('lists');

let   count = 0;

//      записуємо ліст айтеми


document.getElementById('add_button').addEventListener('click', function () {
   event.preventDefault();
   
   list.innerHTML += `<li onClick="replyId(this.id)" id='list_count_${++count}'>${inputData.value}<span class="visibility" id="check_${count}">✓</span> <button onClick="deleteOnClick()" id='${count}'>Х</button></li>`;

   inputData.value = '';

 });

//      видалення ліст айтемів

 function deleteOnClick() {

   let eventId = event.srcElement.id;

   let deletingLiElementId = `list_count_${eventId}`;

   document.getElementById(deletingLiElementId).remove();

}

//      тогл стилів для відображення виконано/не виконано

function replyId(elementId) {
   
   let   currentElement = document.getElementById(elementId);

   currentElement.classList.toggle('unactive');

   let checkElement = document.getElementById(`check_${elementId.split('_').pop()}`);

   checkElement.classList.toggle('visibility');
}