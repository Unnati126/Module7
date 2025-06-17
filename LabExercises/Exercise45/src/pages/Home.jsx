import React from 'react';
import Emoji from '../components/Emoji';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        paddingTop: '4rem',
        paddingLeft: '0.5rem',
      }}
    >
      <h2>Welcome to the Home Page</h2>
      <Emoji />
    </div>
  );
}

export default Home;