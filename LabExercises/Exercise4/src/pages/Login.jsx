import React from 'react';

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',     
        textAlign: 'center',
        justifyContent: 'flex-start', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        paddingTop: '4rem', 
        paddingLeft: '5rem',      
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      <button
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
