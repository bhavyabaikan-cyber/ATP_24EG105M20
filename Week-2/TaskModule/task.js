// Import validator functions
import { validateTitle, validatePriority, validateDueDate } from './validator.js';

// Array to store all tasks
let tasks = [];

// Counter for generating unique task IDs
let nextId = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  // Validate title
  let titleCheck = validateTitle(title);
  if (!titleCheck.valid) {
    return { success: false, message: titleCheck.message };
  }
  
  // Validate priority
  let priorityCheck = validatePriority(priority);
  if (!priorityCheck.valid) {
    return { success: false, message: priorityCheck.message };
  }
  
  // Validate due date
  let dateCheck = validateDueDate(dueDate);
  if (!dateCheck.valid) {
    return { success: false, message: dateCheck.message };
  }
  
  // All validations passed - create task object
  let newTask = {
    id: nextId,
    title: title.trim(),
    priority: priority,
    dueDate: new Date(dueDate),
    completed: false,
    createdAt: new Date()
  };
  
  // Add to tasks array
  tasks.push(newTask);
  
  // Increment ID for next task
  nextId = nextId + 1;
  
  return { success: true, message: "Task added successfully", task: newTask };
}

// 2. Get all tasks
export function getAllTasks() {
  // Return a copy of tasks array
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  // Search for task by ID
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      // Mark as completed
      tasks[i].completed = true;
      return { success: true, message: "Task marked as complete", task: tasks[i] };
    }
  }
  
  // Task not found
  return { success: false, message: "Task not found" };
}

// 4. Delete a task (bonus)
export function deleteTask(taskId) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks.splice(i, 1); // Remove task
      return { success: true, message: "Task deleted" };
    }
  }
  return { success: false, message: "Task not found" };
}