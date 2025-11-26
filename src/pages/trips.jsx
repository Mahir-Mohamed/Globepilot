// src/pages/Trips.jsx
import TripList from "../Components/triplist";

function Trips({ trips, onDeleteTrip }) {
  return (
    <section className="page page-trips">
      <h2>My Trips</h2>
      {trips.length === 0 ? (
        <p>No trips yet. Go to “Plan Trip” to add one.</p>
      ) : (
        <TripList trips={trips} onDeleteTrip={onDeleteTrip} />
      )}
    </section>
  );
}

export default Trips;
