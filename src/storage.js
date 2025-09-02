export function saveUserToStorage(User){
    localStorage.setItem('userTodo', JSON.stringify(User));
}

export function getUserFromStorage(User){
    let userTodoStr = localStorage.getItem('userTodo');
    return JSON.parse(userTodoStr);
}