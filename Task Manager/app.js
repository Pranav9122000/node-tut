const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App ");
});

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")        -   get all the tasks
// app.post("/api/v1/tasks")       -   create a new tasks
// app.get("/api/v1/tasks/:id")    -   get a single task
// app.patch("/api/v1/tasks")      -   update tasks
// app.delete("/api/v1/tasks")     -   delete tasks

const port = 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}......`));
  } catch (error) {
    console.log(error);
  }
};

start();
