"use client";

import Lottie from "lottie-react";
import grass from "@/animation/grass.json";

const GrassAnimation = () => {
    return (
        <div>
             <Lottie animationData={grass} loop />
        </div>
    );
};

export default GrassAnimation;