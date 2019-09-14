import mongoose from 'mongoose';

const taskCollectionName = 'tasks';

const TaskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        completed: Boolean,
    },
    {
        timestamps: true
    }
);

const TaskModel = mongoose.model(taskCollectionName, TaskSchema);

export default TaskModel;