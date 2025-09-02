import { createProjectObject } from './todoLogic.js';
export const User = {
    name: document.querySelector('.user').textContent,
    projects: [createProjectObject('Default')]
}
