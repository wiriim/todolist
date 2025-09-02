let todoContainer = document.querySelector('.todo-container');
let projContainer = document.querySelector('.projects-container');

function createCreateTodoDOM(){
    let container = document.createElement('div');
    container.classList.add('todo', 'create');
    let title = document.createElement('h3');
    title.textContent = 'Create New';
    container.append(title);

    let frmCtrlList = ['input', 'input', 'select', 'textarea'];
    let frmCtrlTxt = ['Title', 'Due Date', 'Priority', 'Description'];
    let frmCtrlAtr = ['create-title', 'create-due-date', 'create-priority', 'create-description'];
    for(let i = 0; i < 4; i++){
        let frmContainer = document.createElement('p');
        let label = document.createElement('label');
        label.htmlFor = frmCtrlAtr[i];
        label.textContent = frmCtrlTxt[i];
        let frmCtrl = document.createElement(frmCtrlList[i]);
        frmCtrl.classList.add(frmCtrlAtr[i]);
        frmCtrl.id = frmCtrlAtr[i];
        if (frmCtrlTxt[i] == 'Due Date')
            frmCtrl.type = 'datetime-local';
        if (frmCtrlList[i] == 'select'){
            let optionVals = ['High', 'Medium', 'Low'];
            for (let j = 0; j < 3; j++){
                let option = document.createElement('option');
                option.value = optionVals[j];
                option.textContent = optionVals[j];
                frmCtrl.append(option);
            }
        }
        frmContainer.append(label, frmCtrl);
        container.append(frmContainer);
    }
    let btnsContainer = document.createElement('div');
    btnsContainer.classList.add('buttons');
    let btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-cancel');
    btnCancel.textContent = 'Cancel';
    let btnSave = document.createElement('button');
    btnSave.classList.add('btn-save');
    btnSave.textContent = 'Save';
    btnsContainer.append(btnCancel, btnSave);
    container.append(btnsContainer);

    return container;
}

function showCreateTodoDOM(){
    let container = createCreateTodoDOM();
    todoContainer.append(container);
}

function hideCreateTodoDOM(){
    let container = document.querySelector('.todo.create');
    container.remove();
}

function createTodoItemDOM(todo){
    let todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo', 'closed');
    let headerContainer = document.createElement('div');
    headerContainer.classList.add('todo-header');
    let check = document.createElement('div');
    check.classList.add('todo-check');
    check.dataset.id = todo.id;
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('todo-title');
    titleDiv.textContent = todo.title;
    headerContainer.append(check, titleDiv);
    let subHeaderContainer = document.createElement('div');
    subHeaderContainer.classList.add('todo-sub-header');
    let dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('todo-due-date');
    dueDateDiv.textContent = todo.dueDate.replace('T', ' ');
    let priorityDiv = document.createElement('div');
    priorityDiv.classList.add('todo-priority');
    priorityDiv.textContent = todo.priority;
    subHeaderContainer.append(dueDateDiv, priorityDiv);
    let descContainer = document.createElement('div');
    descContainer.classList.add('todo-description', 'd-none');
    descContainer.textContent = todo.description;
    todoItemContainer.append(headerContainer, subHeaderContainer, descContainer);

    check.addEventListener('click', ()=>todoItemContainer.remove());
    titleDiv.addEventListener('click', ()=>{
        todoItemContainer.classList.toggle('closed');
        descContainer.classList.toggle('d-none');
    });
    return todoItemContainer;
}

function addTodoItemDOM(todo){
    let todoItem = createTodoItemDOM(todo);
    todoContainer.append(todoItem);
}

function createAddProjectDOM(){
    let container = document.createElement('div');
    container.classList.add('add-project');
    let label = document.createElement('label');
    label.htmlFor = 'projectName';
    label.textContent = 'Project Name';
    let flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex');
    let input = document.createElement('input');
    input.id = 'projectName';
    let btn = document.createElement('button');
    btn.classList.add('btn-save-project');
    btn.textContent = 'Save';
    flexContainer.append(input, btn);
    container.append(label, flexContainer);
    return container;
}

function showCreateAddProjectDOM(){
    let container = createAddProjectDOM();
    projContainer.append(container);
}

function hideCreateAddProjectDOM(){
    let container = document.querySelector('.add-project');
    container.remove();
}

function createProjectItemDOM(project){
    let container = document.createElement('div');
    container.classList.add('project');
    container.textContent = project.name;
    return container;
}

function addProjectItemDOM(project){
    let projectItem = createProjectItemDOM(project);
    projContainer.append(projectItem);
}

function removeTodoItemDOM(todo){
    todo.remove();
}

export {
    showCreateTodoDOM, hideCreateTodoDOM, addTodoItemDOM, 
    showCreateAddProjectDOM, hideCreateAddProjectDOM, addProjectItemDOM,
    removeTodoItemDOM
};