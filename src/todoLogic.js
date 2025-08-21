class Todo{
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
}

class Project{
    todos = [];
    constructor(name){
        this.name = name;
    }

    addTodo(todo){
        this.todos.push(todo);
    }
}

function createTodoObject(title, description, dueDate, priority, project){
    return new Todo(title, description, dueDate, priority, project);
}

function createProjectObject(name){
    return new Project(name);
}

export { createTodoObject, createProjectObject }