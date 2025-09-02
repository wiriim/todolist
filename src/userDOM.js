let userEditStatus = 'Closed';
function createUserEditDOM(){
    let userDiv = document.querySelector('.user');
    
    let saveBtn = document.createElement('button');
    saveBtn.classList.add('user-edit-save');
    saveBtn.textContent = 'Save';
    userDiv.parentElement.append(saveBtn);

    saveBtn.addEventListener('click', ()=>{
        hideUserEditDOM();
        userEditStatus = 'Closed';
    });

    let textArea = document.createElement('input');
    textArea.classList.add('user');
    textArea.value = userDiv.textContent;
    userDiv.replaceWith(textArea);
}

function hideUserEditDOM(){
    let userTxtArea = document.querySelector('.user');

    let saveBtn = document.querySelector('.user-edit-save');
    saveBtn.remove();

    let userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.textContent = userTxtArea.value;
    userTxtArea.replaceWith(userDiv);
}

function getUserEditStatus(){
    return userEditStatus;
}

function openUserEditStatus(){
    userEditStatus = 'Opened';
}

function closeUserEditStatus(){
    userEditStatus = 'Closed';
}

export {getUserEditStatus, openUserEditStatus, closeUserEditStatus, createUserEditDOM, hideUserEditDOM}