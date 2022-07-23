import {Tasks} from './functions.js';

const saveTask = (i, item) => {
    const updated = prompt('update the task', item);
    if (updated === null) return item;
    Tasks.tasklist[i].description = updated;
    localStorage.setItem('tasks', JSON.stringify(Tasks.tasklist));
    return true;
  };

   const editTask = (i, element) => {
    const list = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let i = 0; i < list.length; i += 1) {
      if (Tasks.tasklist[i].description === element) {
        const updatedTask = Tasks.tasklist[i].description;
        saveTask(i, updatedTask);
      }
    }
    
  };

  const changed = (item) => {
    const change = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let j = 0; j < change.length; j += 1) {
      if (Tasks.tasklist[j].description === item) {
        return Tasks.tasklist[j].completed;
        
      }
    }
    return true;
    };

    const clearAllCompletedTasks = (task) => {
         const len = task.length;
        for (let j = 0; j < len; j += 1) {
          if (task.completed === true) {
            task.splice(j, 1);
            j -= 1;
          }
            localStorage.setItem('tasks', JSON.stringify(Tasks.tasklist));
            if(task.length === 0)
             return "All completed tasks removed";
             }
        return true;
      };

    export {saveTask, editTask, changed, clearAllCompletedTasks};