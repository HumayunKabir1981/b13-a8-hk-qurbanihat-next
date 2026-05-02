"use client";

import Lottie from "lottie-react";
import cowAnimation from "@/animation/cow.json";

const CowAnimation = () => {
  return (
    <div className="w-72 mx-auto">
      <Lottie animationData={cowAnimation} loop />
    </div>
  );
};

export default CowAnimation;