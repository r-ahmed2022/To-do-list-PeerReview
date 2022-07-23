/* eslint-disable linebreak-style */
import { Tasks, Show } from './functions.js';
// import { clearCompleted } from './edit.js';

describe('add/remove functions', () => {
  test('adds an element to the list', () => {
    document.body.innerHTML = `
    <div id="task">
      <ul id="to-do-list" class="to-do-list"></ul>
    </div>
`;

    Tasks.addTasks();
    Show.showTasks();
    const list = document.querySelectorAll('.to-do-list');
    expect(list).toHaveLength(1);
  });
  test('removes an element from the list', () => {
    Tasks.deleteTask();
    Show.showTasks();
    const list = document.querySelectorAll('.to-do-list');
    expect(list).toHaveLength(1);
  });
});
