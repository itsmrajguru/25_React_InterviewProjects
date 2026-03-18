const Task = require("../models/task");

//add a task
//get all taks by a user ID
//delete a task 
//edit a task

const addNewTask = async (req, res) => {
    //take task from the frontend
    const { title, description, status, userId, priority } = await req.body

    // validate the schema through joi

    try {
        //create a task and save it into the db
        const newlyCreatedTask = await Task.create({
            title,
            description,
            status,
            userId,
            priority,
        });

        if (newlyCreatedTask) {
            return res.status(200).json({
                success: true,
                message: "Task added successfully",
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Some error occured! Please try again",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        });
    }
};


const getAllTasks = async (req, res) => {
    // we need userId to show the tasks created by him
    const { id } = req.params;

    try {
        const extractAllTasksByUserId = await Task.find({ userId: id });

        if (extractAllTasksByUserId) {
            return res.status(200).json({
                success: true,
                tasksList: extractAllTasksByUserId,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Some error occured! Please try again",
            });
        }
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        });
    }
}
const updateTask = async (req, res) => {

}
const deleteTask = async (req, res) => {

}


module.exports={addNewTask,getAllTasks,updateTask,deleteTask}