// src/components/TripList.jsx
import TripCard from "./tripcard.jsx";

function TripList({ trips, onDeleteTrip }) {
  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          onDelete={() => onDeleteTrip(trip.id)}
        />
      ))}
    </div>
  );
}

export default TripList;
