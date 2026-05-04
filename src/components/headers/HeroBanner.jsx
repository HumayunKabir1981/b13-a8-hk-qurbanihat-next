import React from 'react';
import hero from '@/asset/banner.png'
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
                src={hero}
                alt="banner"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
};

export default HeroBanner;