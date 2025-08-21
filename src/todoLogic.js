class todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class project{
    constructor(name){
        this.name = name;
    }
}

function createTodoObject(title, description, dueDate, priority){
    return new todo(title, description, dueDate, priority);
}

function createProjectObject(name){
    return new project(name);
}

export { createTodoObject, createProjectObject }