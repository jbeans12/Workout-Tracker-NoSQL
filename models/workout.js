const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now

    },
    exercise: [
        {
            type: {
                type: String,
                trim:true,
                required: 'Enter A Exersice Type',
            },
            name: {
                type:String,
                trim:true,
                required: 'Enter A Exersice Name',

            },
            duration: {
                type:Number,
                required:true,

            },
            weight: {
                type:Number,
                required:true,

            },
            reps: {
                type:Number,
                required:true,

            },
            sets: {
                type:Number,
                required:true,

            },
            distance: {
                type:Number,

            },

        }
    ]
},

);


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;