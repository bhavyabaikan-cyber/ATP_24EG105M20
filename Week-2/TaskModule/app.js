// Import task functions
import { addTask, getAllTasks, completeTask, deleteTask } from './task.js';

console.log('=== Task Management System ===\n');

// --- Test 1: Add valid tasks ---
console.log(' Adding Task 1:');
let result1 = addTask('Buy groceries', 'high', '2026-04-01');
console.log(result1);

console.log('\n Adding Task 2:');
let result2 = addTask('Read book', 'low', '2026-05-15');
console.log(result2);

console.log('\n Adding Task 3:');
let result3 = addTask('Finish project', 'medium', '2026-03-20');
console.log(result3);

// --- Test 2: Try adding invalid tasks ---
console.log('\n Adding task with short title:');
let bad1 = addTask('Go', 'high', '2026-04-01');
console.log(bad1);

console.log('\n Adding task with invalid priority:');
let bad2 = addTask('Walk dog', 'urgent', '2026-04-10');
console.log(bad2);

console.log('\n Adding task with past due date:');
let bad3 = addTask('Old task', 'low', '2020-01-01');
console.log(bad3);

// --- Test 3: Display all tasks ---
console.log('\n All Tasks:');
let allTasks = getAllTasks();
for (let i = 0; i < allTasks.length; i++) {
  let t = allTasks[i];
  let status = t.completed ? '' : '';
  console.log(`${status} [${t.id}] ${t.title} | Priority: ${t.priority} | Due: ${t.dueDate.toDateString()}`);
}

// --- Test 4: Complete a task ---
console.log('\n Completing Task ID 1:');
let completeResult = completeTask(1);
console.log(completeResult);

// --- Test 5: Display tasks again ---
console.log('\n Tasks After Completion:');
let updatedTasks = getAllTasks();
for (let i = 0; i < updatedTasks.length; i++) {
  let t = updatedTasks[i];
  let status = t.completed ? "completed":"not completed";
  console.log(`${status} [${t.id}] ${t.title} | Priority: ${t.priority} | Due: ${t.dueDate.toDateString()}`);
}

// --- Test 6: Delete a task ---
console.log('\n Deleting Task ID 2:');
let deleteResult = deleteTask(2);
console.log(deleteResult);

// --- Final task list ---
console.log('\n Final Task List:');
let finalTasks = getAllTasks();
for (let i = 0; i < finalTasks.length; i++) {
  let t = finalTasks[i];
  let status = t.completed ? '' : '';
  console.log(`${status} [${t.id}] ${t.title} | Priority: ${t.priority} | Due: ${t.dueDate.toDateString()}`);
}