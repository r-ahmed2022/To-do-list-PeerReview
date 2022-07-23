const showTasks = (task) => {
  const storedList = JSON.parse(localStorage.getItem('tasks'));
  const list = document.getElementById('to-do-list');
  for (let i = 0; i < storedList.length; i += 1) {
    task.tasklist.push(
      {
        index: storedList[i].index,
        description: storedList[i].description,
        completed: storedList[i].completed,
      },
    );
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item');
    li.innerHTML += `<input type="checkbox" onchange="changed(${i}, '${task.tasklist[i].description}')"  name="completed" class="completed">`;
    li.innerHTML += `<div class="info"><span  class="task.info">${task.tasklist[i].description}</span>`;
    li.innerHTML += `<span class="task-info">${task.tasklist[i].completed}</span></div>`;
    li.innerHTML += `<div class="info"><button type="button" onclick="editTask(${i}, 
                    '${task.tasklist[i].description}')" class="action">Edit</button>`;
    li.innerHTML += `<button type="button" onclick='deleteTask(${i})' id="deletebtn" class="action">Del</button>
               </div>`;
    list.append(li);
  }
  for (let i = 0; i < storedList.length; i += 1) {
    if (task.tasklist[i].completed === true) {
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

export default showTasks;