// src/components/TripForm.jsx
import { useState } from "react";

const initialFormState = {
  destination: "",
  startDate: "",
  endDate: "",
  budget: "",
  notes: "",
};

function TripForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      setError("Destination and dates are required.");
      return;
    }

    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      setError("Start date cannot be after end date.");
      return;
    }

    setError("");
    onSubmit(formData); // tell parent (App) about the new trip
    setFormData(initialFormState); // reset form
  };

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <label>
        Destination
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="e.g., Paris, Tokyo"
        />
      </label>

      <label>
        Start date
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </label>

      <label>
        End date
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Budget (optional)
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="e.g., 50000"
        />
      </label>

      <label>
        Notes
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Things to remember, attractions, etc."
        />
      </label>

      <button type="submit">Save Trip</button>
    </form>
  );
}

export default TripForm;
