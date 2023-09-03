//model does jobs, queires

import TaskSchema from "./TaskSchema.js";

//CRUD -create

export const createTask = (taskobj) => {
  return TaskSchema(taskobj).save();
};
//CRUD-read data-bring
export const readTasks = () => {
  return TaskSchema.find();
};

//update data-_is as a string
export const switchTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};

//delet data
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
