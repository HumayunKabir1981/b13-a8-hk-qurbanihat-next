"use client";

import { useState } from "react";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className="btn btn-primary w-full mt-4"
      >
        Book This Animal
      </button>

      {showForm && <BookingForm />}
    </div>
  );
};

export default BookingSection;