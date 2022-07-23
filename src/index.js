/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// import _, { constant } from 'lodash';
import './style.css';
import Tasks from './modules/tasks.js';
import showTasks from './modules/showTasks.js';

const task = new Tasks();
const form = document.getElementById('add-new-to-do');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (document.getElementById('input-item').value === '') {
    document.getElementById('error').innerHTML = 'please add task first';
  } else {
    task.addTasks();
  }
});

window.changed = (i, item) => {
  const change = JSON.parse(localStorage.getItem('tasks'));
  for (let j = 0; j < change.length; j += 1) {
    if (task.tasklist[j].description === item) {
      task.tasklist[j].completed = true;
      localStorage.setItem('tasks', JSON.stringify(task.tasklist));
    }
  }
  window.location.reload();
};

setInterval(() => {
  const countmsg = document.getElementById('msgs');
  countmsg.innerHTML = `${task.tasklist.length}&nbsp;tasks`;
}, 1000);

window.deleteTask = (i) => {
  task.tasklist.splice(i, 1);
  task.tasklist.forEach((item) => {
    if (item.index <= 0) {
      item.index = 1;
    } else {
      item.index -= 1;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(task.tasklist));
  window.location.reload();
};

const saveTask = (i, item) => {
  const updated = prompt('update the task', item);
  if (updated === null) return item;
  task.tasklist[i].description = updated;
  localStorage.setItem('tasks', JSON.stringify(task.tasklist));
  return true;
};

window.editTask = (i, element) => {
  const list = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < list.length; i += 1) {
    if (task.tasklist[i].description === element) {
      const updatedTask = task.tasklist[i].description;
      saveTask(i, updatedTask);
    }
  }
  window.location.reload();
};

window.clearAllCompletedTasks = () => {
  const completedList = JSON.parse(localStorage.getItem('tasks'));
  const len = completedList.length;
  for (let j = 0; j < len; j += 1) {
    if (task.tasklist[j].completed === true) {
      task.tasklist.splice(j, 1);
      j -= 1;
      localStorage.setItem('tasks', JSON.stringify(task.tasklist));
      window.location.reload();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  showTasks(task);
});
