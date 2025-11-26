// src/components/TripCard.jsx
import TripDetails from "./tripdetails.jsx";

function TripCard({ trip, onDelete }) {
  return (
    <article className="trip-card">
      <h3>{trip.destination}</h3>
      <p>
        {trip.startDate} → {trip.endDate}
      </p>
      {trip.budget && <p>Budget: ₹{trip.budget}</p>}
      <TripDetails trip={trip} />
      <button className="danger" onClick={onDelete}>
        Delete
      </button>
    </article>
  );
}

export default TripCard;
