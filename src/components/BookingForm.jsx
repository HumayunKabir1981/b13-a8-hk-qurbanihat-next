"use client";

import { useState } from "react";

const BookingForm = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
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

      <div
        className={`fixed top-100 right-5 z-50 transform transition-all duration-500 
        ${showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <div className="bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">

          {/* ICON */}
          <span className="text-xl">✅</span>

          <div>
            <p className="font-semibold">Booking Confirmed</p>
            <p className="text-sm opacity-80">We will contact you soon</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BookingForm;