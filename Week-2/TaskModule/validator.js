// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  // Check if title is empty
  if (title === null || title === undefined) {
    return { valid: false, message: "Title is required" };
  }
  
  // Trim spaces
  let trimmed = title.trim();
  
  // Check length
  if (trimmed.length < 3) {
    return { valid: false, message: "Title must be at least 3 characters" };
  }
  
  // All good
  return { valid: true, message: "Title is valid" };
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  // List of allowed priorities
  let allowed = ['low', 'medium', 'high'];
  
  // Check if priority is in allowed list
  for (let i = 0; i < allowed.length; i++) {
    if (priority === allowed[i]) {
      return { valid: true, message: "Priority is valid" };
    }
  }
  
  // Not found in list
  return { valid: false, message: "Priority must be low, medium, or high" };
}

// 3. Validate due date (must be future date)
export function validateDueDate(dateString) {
  // Convert input string to Date object
  let inputDate = new Date(dateString);
  
  // Check if date is valid
  if (isNaN(inputDate.getTime())) {
    return { valid: false, message: "Invalid date format" };
  }
  
  // Get today's date (set time to midnight for fair comparison)
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Check if input date is in the future
  if (inputDate > today) {
    return { valid: true, message: "Due date is valid" };
  }
  
  // Date is today or in past
  return { valid: false, message: "Due date must be in the future" };
}