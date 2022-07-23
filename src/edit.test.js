import { Tasks, Show } from './functions.js';
import {changed, clearAllCompletedTasks, editTask} from './edit.js';

describe('edit task', () => {
  Tasks.tasklist.push(
    {
      index: 1,
      description: 'testing edit function' ,
      completed: true,
    },
  );

   document.body.innerHTML = `
  <div id="task" class="task">
    <ul id="to-do-list" class="to-do-list">
    <li>
    <input type="hidden" value="${Tasks.tasklist[0].index}">
    <input type="checkbox" name="completed" class="completed"  value="${Tasks.tasklist[0].completed}">
     <div class="info"><input type="text" class="task-info" value="${Tasks.tasklist[0].description}">
    </div>
     </li>
    </ul>
  </div>
`;
  const list = document.querySelectorAll('.info .task-info').value;
  
  test('unedited item on list', () => {
    expect(Tasks.tasklist.description).toEqual(list);
  });

    test('edits task in the to do list', () => {
        editTask(Tasks.tasklist[0].index, Tasks.tasklist[0].description);
        expect(Tasks.tasklist[0].description).not.toEqual(list);
     
    });

    test('Check if task completed successfully ', () => {
      expect(changed(Tasks.tasklist[0].completed)).toBe(true);
    });

    test('Check completed tasks are removed successfully ', () => {
      expect(clearAllCompletedTasks(Tasks.tasklist)).toBe('All completed tasks removed');
    });

});