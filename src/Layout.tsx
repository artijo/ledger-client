import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
        <header>
            <h1>Header</h1>
        </header>
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