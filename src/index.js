import './styles.css';
import { createTodoObject, createProjectObject, Project, Todo } from './todoLogic.js';
import { 
    showCreateTodoDOM, hideCreateTodoDOM, addTodoItemDOM, 
    showCreateAddProjectDOM, hideCreateAddProjectDOM, addProjectItemDOM
} from './todoDOM.js';
import { User, removeUserTodo } from './user.js';
import { getUserEditStatus, openUserEditStatus, closeUserEditStatus, createUserEditDOM, hideUserEditDOM } from './userDOM.js';
import { getUserFromStorage, saveUserToStorage } from './storage.js';
export { saveUserToStorage, getUserFromStorage } from './storage.js';

// Storage Saving & Loading
window.addEventListener('beforeunload', ()=>{
    saveUserToStorage(User);
});

window.addEventListener('DOMContentLoaded', ()=>{
    let existingUser = getUserFromStorage();
    Object.assign(User, existingUser);
    User.projects.forEach((proj)=>{
        Object.setPrototypeOf(proj, Project.prototype);
        addProjectItemDOM(proj);
        refreshProjListeners();
        proj.todos.forEach((todo)=>{
            Object.setPrototypeOf(todo, Todo.prototype);
            if (todo.project == currProjName){
                addTodoItemDOM(todo);
            }
        });
        refreshProjTodos();
    });

    userDiv = document.querySelector('.user');
    userDiv.textContent = User.name;
    console.log(User);
});

// User Edit
let userEditBtn = document.querySelector('.user-edit');
let userDiv;

userEditBtn.addEventListener('click', ()=>{
    if (getUserEditStatus() == 'Opened'){
        hideUserEditDOM();
        closeUserEditStatus();
        userDiv = document.querySelector('.user');
        User.name = userDiv.textContent;
    }
    else{
        createUserEditDOM();
        let userEditSaveBtn = document.querySelector('.user-edit-save');
        userEditSaveBtn.addEventListener('click', ()=>{
            userDiv = document.querySelector('.user');
            User.name = userDiv.textContent;
        });
        openUserEditStatus();
    }
    
});

// Current Project Management
let currProjDOM = document.querySelector('#project');
let currProjName = currProjDOM.value;
let projTitleDOM = document.querySelector('.project-title');
projTitleDOM.textContent = `Project: ${currProjName}`;
refreshProjListeners();
function refreshProjListeners(){
    let projects = document.querySelectorAll('.project');
    projects.forEach(proj => {
        let newProj = proj.cloneNode(true);
        proj.parentElement.replaceChild(newProj, proj);

        newProj.addEventListener('click', (e)=>{
            currProjName = e.target.textContent;
            projTitleDOM.textContent = `Project: ${currProjName}`;
        });
    });
}

refreshProjTodos();
function refreshProjTodos(){
    let projects = document.querySelectorAll('.project');
    projects.forEach(proj => {
        proj.addEventListener('click', (e)=>{
            let todos = document.querySelectorAll('.todo');
            todos.forEach(e => e.remove());

            User.projects.forEach((proj)=>{
                if (proj.name == currProjName){
                    proj.todos.forEach((todo)=> addTodoItemDOM(todo));
                }
            });

            refreshTodoDelete();
        });
    });
}

// Delete existing todo
refreshTodoDelete();
function refreshTodoDelete(){
    let todoChecks = document.querySelectorAll('.todo-check');
    todoChecks.forEach((check)=>{
        check.addEventListener('click', (e)=>{
            removeUserTodo(e.target.dataset.id);
        });
    });
}


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
let todoId;
btnNewTodo.addEventListener('click', ()=>{
    if (createNewTodoStatus == 'closed'){
        showCreateTodoDOM();
        createNewTodoStatus = 'opened';

        btnSave = document.querySelector('.btn-save');
        btnSave.addEventListener('click', ()=>{
            todoId = crypto.randomUUID();
            titleInput = document.querySelector('#create-title').value;
            dueDateInput = document.querySelector('#create-due-date').value;
            prioInput = document.querySelector('#create-priority').value;
            descInput = document.querySelector('#create-description').value;
            todoItem = createTodoObject(todoId, titleInput, descInput, dueDateInput, prioInput, currProjName);
            addTodoItemDOM(todoItem);
            User.projects.forEach((proj)=>{
                if (proj.name == todoItem.project)
                    proj.addTodo(todoItem);
            });
            hideCreateTodoDOM();
            createNewTodoStatus = 'closed';
            refreshTodoDelete();
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

// Create new project
let createNewProjStatus = 'closed'
let btnNewProj = document.querySelector('.btn-new-project');
let btnSaveProj;
let projNameInput;
let projectItem;
btnNewProj.addEventListener('click', ()=>{
    if (createNewProjStatus == 'closed'){
        showCreateAddProjectDOM();
        createNewProjStatus = 'opened'

        btnSaveProj = document.querySelector('.btn-save-project');
        btnSaveProj.addEventListener('click', ()=>{
            projNameInput = document.querySelector('#projectName').value;
            projectItem = createProjectObject(projNameInput);
            addProjectItemDOM(projectItem);
            User.projects.push(projectItem);
            hideCreateAddProjectDOM();
            createNewProjStatus = 'closed';
            refreshProjListeners();
            refreshProjTodos();
        });
    }
    else{
        hideCreateAddProjectDOM();
        createNewProjStatus = 'closed'
    }
});
