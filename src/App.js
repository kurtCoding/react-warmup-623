import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Workouts from "./components/workouts/Workouts";
import WorkoutDetails from "./components/workout/WorkoutDetails";
import CreateWorkout from "./components/createWorkout/CreateWorkout";

function App() {
  const [workoutList, setWorkoutList] = useState([
    {
      id: 1,
      name: "Morning Run",
      date: "2023-06-21",
      duration: "30 minutes",
      calories: 300,
    },
    {
      id: 2,
      name: "Evening Yoga",
      date: "2023-06-22",
      duration: "45 minutes",
      calories: 200,
    },
    {
      id: 3,
      name: "Morning Bike Ride",
      date: "2023-06-22",
      duration: "1 hour 30 minutes",
      calories: 500,
    },
    {
      id: 4,
      name: "Night Swim",
      date: "2023-07-22",
      duration: "45 minutes",
      calories: 700,
    },
    {
      id: 5,
      name: "Morning Hike",
      date: "2023-08-22",
      duration: "5 hours",
      calories: 1500,
    }
  ]);

  // Function to add a new workout
  const addWorkout = () => {};

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/workouts"
              element={<Workouts workoutList={workoutList} />}
            />
            <Route
              path="/workouts/:id"
              element={<WorkoutDetails workoutList={workoutList} />}
            />
            <Route
              path="/create"
              element={<CreateWorkout addWorkout={addWorkout} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
