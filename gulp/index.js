var gulp = require("gulp");

function getTask(foundTasks, currentTaskName) {
  var task = require("./tasks/" + currentTaskName);
  return { ...foundTasks, [currentTaskName]: task };
}

function loadTasks(taskList) {
  return taskList.reduce(getTask, {});
}

module.exports = loadTasks;

// taskList.reduce((foundTasks, currentTask) => ({...foundTasks,}), {});
