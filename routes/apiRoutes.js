const Workout = require('../models/Workout.js');
const Router = require('express').Router();


Router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

Router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

Router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
      .catch(err => {
      res.json(err);
      });
  });

Router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id, 
        // {$push: {exercises: body}}, 
        {new:true, runValidators:true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

Router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = Router;