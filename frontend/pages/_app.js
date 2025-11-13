import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ backgroundColor: '#0070f3', padding: '1rem', color: 'white' }}>
        <h1>Master Liga Arena</h1>
      </nav>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
