

import NavBar from '@/components/headers/NavBar';
import React from 'react';

const AuthLayoyt = ({ children }) => {
    return (
        <div>

            <NavBar></NavBar>

            {children}
        </div>
    );
};

export default AuthLayoyt;