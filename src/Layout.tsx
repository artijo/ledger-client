import React, { ReactNode } from 'react';
import Header from './components/Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
        <Header />
        <main className='container mx-auto'>
            {children}
        </main>
        <footer>
            <h1>Footer</h1>
        </footer>
        </>
    )
}

export default Layout