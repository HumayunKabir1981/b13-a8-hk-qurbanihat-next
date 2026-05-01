import React from 'react';
import hero from '@/asset/banner.png'
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className="relative w-full h-[300px]">
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