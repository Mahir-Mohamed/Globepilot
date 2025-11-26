// src/components/TripDetails.jsx
function TripDetails({ trip }) {
  return (
    <div className="trip-details">
      {trip.notes ? (
        <p>{trip.notes}</p>
      ) : (
        <p className="muted">No notes added.</p>
      )}
    </div>
  );
}

export default TripDetails;
