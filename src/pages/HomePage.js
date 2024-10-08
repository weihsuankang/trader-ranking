import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>歡迎來到加密貨幣帶單員績效平台</h1>
        <p>這是一個公正公開的帶單員績效展示平台。</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
