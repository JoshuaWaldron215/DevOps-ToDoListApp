const addBtn = document.getElementById("addTask");
const taskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") return;
    const li = document.createElement("li");

    // visible text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskInput.value;

    // inline editor (hidden initially)
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'task-edit-input';
    input.style.display = 'none';

    // edit controls
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save';
    saveBtn.style.display = 'none';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.display = 'none';

    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(cancelBtn);
    taskList.appendChild(li);

    // Edit button toggles to edit mode
    editBtn.addEventListener('click', () => {
      input.value = span.textContent;
      span.style.display = 'none';
      input.style.display = '';
      editBtn.style.display = 'none';
      saveBtn.style.display = '';
      cancelBtn.style.display = '';
      input.focus();
    });

    // Save updated text
    saveBtn.addEventListener('click', () => {
      const newText = input.value.trim();
      if (newText === '') return;
      span.textContent = newText;
      span.style.display = '';
      input.style.display = 'none';
      editBtn.style.display = '';
      saveBtn.style.display = 'none';
      cancelBtn.style.display = 'none';
    });

    // Cancel edit
    cancelBtn.addEventListener('click', () => {
      span.style.display = '';
      input.style.display = 'none';
      editBtn.style.display = '';
      saveBtn.style.display = 'none';
      cancelBtn.style.display = 'none';
    });

    // allow Enter to save and Escape to cancel
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveBtn.click();
      if (e.key === 'Escape') cancelBtn.click();
    });
    taskInput.value = "";
  });
}
