class todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function createTodoObject(title, description, dueDate, priority){
    return new todo(title, description, dueDate, priority);
}