const express = require('express'); // import express
const v1WorkoutRouter = require('./v1/routes/workoutRoutes'); // import v1Router

const app = express(); // create an instance of express
const PORT = process.env.PORT || 3000; // set the port to either the env variable or 3000

app.use(express.json()); // use express json middleware
app.use("/api/v1/workouts", v1WorkoutRouter); // use the v1WorkoutRouter

app.listen(PORT,()=>{console.log(`🚀 Server is running on port ${PORT}`)}); // listen on the port and log a message to the console