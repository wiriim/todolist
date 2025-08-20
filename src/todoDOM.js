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

export function showCreateTodoDOM(){
    let todoContainer = document.querySelector('.todo-container');
    let container = createCreateTodoDOM();
    todoContainer.append(container);
}

export function hideCreateTodoDOM(){
    let container = document.querySelector('.todo.create');
    container.remove();
}