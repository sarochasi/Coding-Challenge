const db = require('../db');

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const [tasks] = await db.query('SELECT * FROM tasks');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new task
const addTask = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
        const [result] = await db.query('INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)', [title, description, dueDate]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing task
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;
    try {
        await db.query('UPDATE tasks SET title = ?, description = ?, due_date = ? WHERE id = ?', [title, description, dueDate, id]);
        res.status(200).send('Task updated successfully');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.status(200).send('Task deleted successfully');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
