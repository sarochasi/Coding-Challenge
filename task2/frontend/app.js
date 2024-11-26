const API_URL = 'http://localhost:8080/tasks';

// Fetch and display tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Handle form submission to add or update a task
document.getElementById('taskForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const taskId = document.getElementById('taskId').value; // Check if updating
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if (taskId) {
        // Update task (PUT /tasks/:id)
        await fetch(`${API_URL}/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, dueDate })
        });
    } else {
        // Add new task (POST /tasks)
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, dueDate })
        });
    }

    // Reload tasks
    loadTasks();

    // Clear the form
    e.target.reset();
    document.getElementById('taskId').value = ''; // Reset taskId
});

// Function to load and display tasks
async function loadTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const formattedDate = new Date(task.due_date).toISOString().split('T')[0];

        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong> (Due: ${formattedDate})
                <p>${task.description}</p>
            </div>
            <div class="buttons">
                <button class="edit" onclick="editTask(${task.id}, '${task.title}', '${task.description}', '${task.due_date}')">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}



// Function to populate the form with task data for editing
function editTask(id, title, description, dueDate) {
    document.getElementById('taskId').value = id; // Set the task ID in the hidden field
    document.getElementById('title').value = title;
    document.getElementById('description').value = description;
    document.getElementById('dueDate').value = dueDate;
}

// Function to delete a task
async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    loadTasks();
}
