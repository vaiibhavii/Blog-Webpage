import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BlogFilters from './components/BlogFilters';
import FeaturedPosts from './components/FeaturedPosts';
import LatestPosts from './components/LatestPosts';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <BlogFilters />
        <FeaturedPosts />
        <LatestPosts />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;