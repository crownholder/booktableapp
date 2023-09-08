import React, { useState } from 'react';

const BookingForm1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '17:00',
    numberOfGuests: 1,
    occasion: 'Birthday',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true); 
  };

  return (
    <div>
      {isSubmitted ? (
        <div style={{ margin: '25px' }}>
          <h2>Thank You for Your Booking!</h2>
          <p>
            Name: {formData.firstName} {formData.lastName}
          </p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <p>Number of Guests: {formData.numberOfGuests}</p>
          <p>Occasion: {formData.occasion}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ margin: '25px' }}>
          <h2>Table Booking</h2>
          <label htmlFor="res-fname">First Name</label>
          <br />
          <input
            id="res-fname"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="res-lname">Last Name</label>
          <br />
          <input
            id="res-lname"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="res-date">Choose A Date</label>
          <br />
          <input
            id="res-date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <br />
          <label>Choose Time</label><br />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select><br />
          <label htmlFor="occasion">Occasion</label><br />
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select><br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm1;
