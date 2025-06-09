import React, { useState } from "react";
import "../TableBooking.css";

function TableBooking() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table booked successfully!");
    setFormData({ name: "", date: "", time: "", guests: "", contact: "" });
  };

  return (
    <div className="booking-page">
      <h2>Reserve Your Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="guests"
          placeholder="No. of Guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default TableBooking;
