const customInputHost = document.querySelector('custom-input');
const addBtn = document.querySelector('custom-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const innerInput = customInputHost.querySelector('.input-text');
    const li = document.createElement('li');
    li.textContent = innerInput.value;
    taskList.appendChild(li);
    innerInput.value = '';
});