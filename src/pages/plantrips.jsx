// src/pages/PlanTrip.jsx
import TripForm from "../Components/tripform.jsx";

function PlanTrip({ onAddTrip }) {
  return (
    <section className="page page-plan">
      <h2>Create a new trip</h2>
      <TripForm onSubmit={onAddTrip} />
    </section>
  );
}

export default PlanTrip;
