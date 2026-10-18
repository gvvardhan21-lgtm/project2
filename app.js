// Sample JavaScript: a small task list
const tasks = [];

function addTask(title) {
	if (typeof title !== "string" || title.trim() === "") {
		throw new Error("Task title cannot be empty.");
	}

	const task = {
		id: tasks.length + 1,
		title: title.trim(),
		completed: false,
	};

	tasks.push(task);
	return task;
}

function completeTask(id) {
	const task = tasks.find((item) => item.id === id);
	if (!task) return false;

	task.completed = true;
	return true;
}

addTask("Learn JavaScript");
addTask("Build a small project");
completeTask(1);

console.log(tasks);
