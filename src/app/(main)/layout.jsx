
import Footer from '@/components/footer/Footer';
import HeroBanner from '@/components/headers/HeroBanner';
import NavBar from '@/components/headers/NavBar';
import React from 'react';

const MainLayoyt = ({ children }) => {
    return (
        <div>


            <div className="sticky top-0 z-50 bg-white shadow-md">
                <NavBar />
            </div>
            
            <div>
                <HeroBanner></HeroBanner>
            </div>

            {children}

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayoyt;