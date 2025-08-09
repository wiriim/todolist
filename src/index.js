import './styles.css';
import {createTodo} from './todoLogic.js';

let btnNewTodo = document.querySelector('.btn-new');

console.log(createTodo('title', 'desc', 'duedate', 'prio'))

// btnNewTodo.addEventListener('click', )