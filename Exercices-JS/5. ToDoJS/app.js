// define const for the input, then transform the first letter written in uppercase

const input = document.querySelector('.task-input');

//transform the first letter written in the input to uppercase, then the rest of the letters in lowercase
input.addEventListener('keyup', () => {
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
}
);
console.log(input.value);

//when you click on the button, the input is added to the list
const button = document.querySelector('.task-button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const list = document.querySelector('.task-scheduled');
    const divTask = document.createElement('div');
    const checkbox = document.createElement('input');
    const pTask = document.createElement('p');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    pTask.classList.add('p-task');
    divTask.classList.add('div-task');
    pTask.innerHTML = input.value;
    // add a delete button to the task
    if (input.value !== '') {
    const buttonDelete = document.createElement('img');
    // set buttondelete to the img serc fermer.svg
    buttonDelete.src = "/Exercices-JS/5. ToDoJS/ressources/fermer.svg";
    buttonDelete.classList.add('delete-button');
    list.appendChild(divTask);
    divTask.appendChild(checkbox);
    divTask.appendChild(pTask);
    divTask.appendChild(buttonDelete);

    //add eventlistener to the delete button
    input.value = '';
    buttonDelete.addEventListener('click', () => {
        buttonDelete.remove();
        divTask.remove();
        
    }
    );
    }
}
);
    // make the h1 red when the task is checked
    



//when you click on the checkbox, add 'checked' to the class of the div-task
const checkbox = document.getElementsByClassName('checkbox');
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', () => {
        checkbox[i].parentElement.classList.toggle('checked');
    }
    );
}


    // checkbox.addEventListener('click', (e) => {
    //    e.target.parentNode.classList.toggle('checked');
    // }
    // );












