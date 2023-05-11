// Login Form Component is used to take the user's name and email as input and store it in the local storage.
import React, { useState } from 'react';
import './LoginForm.css'

const TicketBookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [seats, setSeats] = useState(1);
  
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
  
    const movieDate = currentDate;
    const movieTime = currentTime;
    const ticketPrice = "$10";
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const bookingData = { email, seats };
      localStorage.setItem('bookingData', JSON.stringify(bookingData));
      console.log(bookingData);
    };
  
    return (
      <div>
        <h1 className='formheading'>Ticket Booking Form</h1>
        <p className='Para-form'>Date: {movieDate}</p>
        <p className='Para-form'>Time: {movieTime}</p>
        <p className='Para-form'>Ticket Price: {ticketPrice}</p>
        <form className='formlogin' onSubmit={handleSubmit}>
          <label className='label-form'>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label className='label-form'>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label className='label-form'>
            Number of Seats:
            <input type="number" value={seats} min="1" max="10" onChange={(e) => setSeats(e.target.value)} />
          </label>
          <br />
          <button className='Button-form' type="submit">Book Tickets</button>
        </form>
      </div>
    );
  };
  
  export default TicketBookingForm;
  