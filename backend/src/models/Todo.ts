import mongoose from "mongoose";

// schema define data value which we can store ina a table
const todoSchema = new mongoose.Schema({
    uid : String,
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    description : String,
    taskType: {
        type: String,
        required: true,
        enum : {
            values: [
                'Official',
                'Personal',
                'Hobby',
                'other'
            ],
        }
    },
    dateCreated: {
        type: Date, 
        default: new Date()
    },
    dateModified: {
        type: Date, 
        default: new Date()
    },
    dueDate:{
        type: Date
    },
    
    priority: {
        type: Boolean, 
        default: false
    },
    isCompleted: {type: Boolean, default: false},

});

// model: it is like collection or table based on above schema so the data can be stored in this table
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;