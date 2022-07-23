/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable linebreak-style */
export class Tasks {
     static tasklist = [];

     static addTasks = (task) => {
       const id = Tasks.tasklist.length + 1;
       const desc = task;
       const completed = false;
       Tasks.tasklist.push({
         index: id,
         description: desc,
         completed,
       });
       localStorage.setItem('tasks', JSON.stringify(Tasks.tasklist));
     }

     static deleteTask = (i) => {
       Tasks.tasklist.splice(i, 1);
       Tasks.tasklist.forEach((item) => {
         if (item.index <= 0) {
           item.index = 1;
         } else {
           item.index -= 1;
         }
       });
       localStorage.setItem('tasks', JSON.stringify(Tasks.tasklist));
     };
}

export class Show {
 static showTasks = () => {
   const storedList = localStorage.getItem('tasks') || [];
   const list = document.getElementById('to-do-list');
   for (let i = 0; i < storedList.length; i += 1) {
     Tasks.tasklist.push(
       {
         index: storedList[i].index,
         description: storedList[i].description,
         completed: storedList[i].completed,
       },
     );
     const li = document.createElement('li');
     li.setAttribute('class', 'list-item');
     li.innerHTML += `<input type="checkbox" onchange="changed(${i}, '${Tasks.tasklist[i].description}')"  name="completed" class="completed">`;
     li.innerHTML += `<div class="info"><span  class="task-info">${Tasks.tasklist[i].description}</span>`;
     li.innerHTML += `<span class="task-info">${Tasks.tasklist[i].completed}</span></div>`;
     li.innerHTML += `<div class="info"><button type="button" onclick="editTask(${i}, 
                      '${Tasks.tasklist[i].description}')" class="action">Edit</button>`;
     li.innerHTML += `<button type="button" onclick='Tasks.deleteTask(${i})' id="deletebtn" class="action">Del</button>
                 </div>`;
     list.append(li);
   }
   for (let i = 0; i < storedList.length; i += 1) {
     if (Tasks.tasklist[i].completed === true) {
       const check = document.getElementsByClassName('completed');
       const collection = document.getElementsByClassName('info');
       collection[i].style.textDecoration = 'line-through';
       collection[i].style.color = 'green';
       collection[i].style.fontWeight = 'bold';
       collection[i].style.fontStyle = 'italic';
       check[i].checked = true;
     }
   }
 };
}
