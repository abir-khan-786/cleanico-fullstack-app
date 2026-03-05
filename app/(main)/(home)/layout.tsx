import { Footer } from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';
import React from 'react';

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (

        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full overflow-x-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;