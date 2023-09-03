import express from "express";
import { createTask, readTasks, switchTask } from "../model/TaskModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  //get data from db
  const taskList = await readTasks();

  res.json({
    status: "success",
    message: "From Get method",
    taskList,
  });
});

router.post("/", async (req, res) => {
  try {
    //things to do (methods) after making in Model.js
    //bring it to R
    const result = await createTask(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New task added succcessfully",
        })
      : res.json({
          status: "error",
          message: "unable to add data",
        });
  } catch (err) {
    console.log(err);
  }
});

//updat data in db
router.patch("/", async (req, res) => {
  try {
    const { _id, type } = req.body;
    //updta data in array

    const result = await switchTask(_id, type);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "the task has been edited",
        })
      : res.json({
          status: "error",
          message: "the task has not been edited",
        });
  } catch (err) {
    console.log(err);

    res.json({
      status: "error",
      message: "the task has not been edited",
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await deleteTaskById(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "the task has been deleted",
        })
      : res.json({
          status: "error",
          message: "'unable to delete",
        });
  } catch (err) {
    console.log(err);

    res.json({
      status: "error",
      message: "Error in  deleting the task ",
    });
  }
});

export default router;
