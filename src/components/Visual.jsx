import React from 'react';
import TrendMovies from './TrendMovies';
import SubscriptionPlans from './SubscriptionPlans';
import Footer from './Footer';

export default function Visual() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-slate-800 to-black text-white min-h-screen">
      <TrendMovies />
      <SubscriptionPlans />
      <Footer />
    </section>
  );
}
