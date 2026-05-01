import React from 'react';
import hero from '@/asset/herobanner.png'
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className="relative w-full h-[700px]">
            <Image
                src={hero}
                alt="banner"
                fill
                className="object-cover"
            />
        </div>
    );
};

export default HeroBanner;