import './styles.css';
import { createTodoObject } from './todoLogic.js';
import { showCreateTodoDOM, hideCreateTodoDOM, addTodoItemDOM } from './todoDOM.js';

let currProjDOM = document.querySelector('#project');
let currProj = currProjDOM.value;
let projTitleDOM = document.querySelector('.project-title');
projTitleDOM.textContent = `Project: ${currProj}`;
// Create new todo
let createNewTodoStatus = 'closed'
let btnNewTodo = document.querySelector('.btn-new');
let btnSave;
let btnCancel;
let titleInput;
let dueDateInput;
let prioInput;
let descInput;
let todoItem;
btnNewTodo.addEventListener('click', ()=>{
    if (createNewTodoStatus == 'closed'){
        showCreateTodoDOM();
        createNewTodoStatus = 'opened';

        btnSave = document.querySelector('.btn-save');
        btnSave.addEventListener('click', ()=>{
            titleInput = document.querySelector('#create-title').value;
            dueDateInput = document.querySelector('#create-due-date').value;
            prioInput = document.querySelector('#create-priority').value;
            descInput = document.querySelector('#create-description').value;
            console.log(dueDateInput)
            todoItem = createTodoObject(titleInput, descInput, dueDateInput, prioInput);
            addTodoItemDOM(todoItem);
            hideCreateTodoDOM();
            createNewTodoStatus = 'closed';
        });

        btnCancel = document.querySelector('.btn-cancel');
        btnCancel.addEventListener('click', ()=>{
            hideCreateTodoDOM();
            createNewTodoStatus = 'closed';
        });
    }
    else{
        hideCreateTodoDOM();
        createNewTodoStatus = 'closed';
    }
});

