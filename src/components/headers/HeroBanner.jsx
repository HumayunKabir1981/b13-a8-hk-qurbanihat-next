import React from 'react';
import hero from '@/asset/herobanner.png'
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className='container mx-auto'>
            <Image
                src={hero}
                alt="banner"
                width={1500}
                height={300}
            />
        </div>
    );
};

export default HeroBanner;