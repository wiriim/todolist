class Todo{
    constructor(id, title, description, dueDate, priority, project){
        this.id = id;
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

function createTodoObject(id, title, description, dueDate, priority, project){
    return new Todo(id, title, description, dueDate, priority, project);
}

function createProjectObject(name){
    return new Project(name);
}

export { createTodoObject, createProjectObject, Project, Todo }