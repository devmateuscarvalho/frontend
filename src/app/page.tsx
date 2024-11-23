'use client';

import DonationSection from '@/app/components/DonationSection';
import Header from '@/app/components/Header';
import Map from '@/app/components/Map';
import RainData from '@/app/components/RainData';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col lg:flex-row gap-4 p-4">
        <div className="order-last lg:order-first lg:absolute lg:inset-y-0 lg:right-36 flex items-center">
            <DonationSection />
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8 flex-1">
            <Header />
            <Map />
            <RainData />
        </div>
    </div>
    );
}
