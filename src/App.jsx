// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Navbar from "./Components/navbar.jsx";
import Home from "./pages/homepage.jsx";
import PlanTrip from "./pages/plantrips.jsx";
import Trips from "./pages/trips.jsx";

function App() {
  // --------- GLOBAL STATE FOR TRIPS ----------
  const [trips, setTrips] = useState([]);

  // add a trip
  const handleAddTrip = (newTrip) => {
    setTrips((prev) => [...prev, { ...newTrip, id: Date.now() }]);
  };

  // delete a trip
  const handleDeleteTrip = (id) => {
    setTrips((prev) => prev.filter((trip) => trip.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/plan"
              element={<PlanTrip onAddTrip={handleAddTrip} />}
            />
            <Route
              path="/trips"
              element={
                <Trips trips={trips} onDeleteTrip={handleDeleteTrip} />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
