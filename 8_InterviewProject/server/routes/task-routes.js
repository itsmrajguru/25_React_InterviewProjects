const express = require('express')

const taskRouter = express.Router()

const{addNewTask,getAllTasks}=require('../controllers/task-controller')


taskRouter.post('/add-new-task',addNewTask)
taskRouter.get('/get-all-tasks-by-user-id',getAllTasks)
