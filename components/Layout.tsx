import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout({children} : any){
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};