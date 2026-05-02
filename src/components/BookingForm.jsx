"use client";

import { useState } from "react";
import { toast } from 'react-toastify';

const BookingForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();


    toast.success("Booking Confirmed Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });


    e.target.reset();
  };

  return (
    <div className="mt-6">

      <h2 className="text-xl font-semibold mb-3">Booking Form</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" placeholder="Your Name" required className="input input-bordered w-full" />
        <input type="email" placeholder="Email" required className="input input-bordered w-full" />
        <input type="tel" placeholder="Phone" required className="input input-bordered w-full" />
        <textarea placeholder="Address" required className="textarea textarea-bordered w-full"></textarea>

        <button type="submit" className="btn btn-success w-full">
          Confirm Booking
        </button>
      </form>

     
    </div>
  );
};

export default BookingForm;