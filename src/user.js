import { createProjectObject } from './todoLogic.js';
export const User = {
    name: document.querySelector('.user').textContent,
    projects: [createProjectObject('Default')]
}

export function removeUserTodo(todoId){
    User.projects.forEach((proj)=>{
        proj.todos.forEach((todo)=>{
            if (todo.id == todoId){
                let index = proj.todos.indexOf(todo);
                proj.todos.splice(index, 1);
            }
        });
    });
}
