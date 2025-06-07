import MoodProvider from './context/MoodProvider';
import Emoji from './Emoji';
import BitcoinRates from './BitcoinRates';

function App() {
  return (
    <MoodProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          paddingTop: '3rem',
          paddingLeft: '47rem',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ marginBottom: '1.5rem' }}>React Mood App</h1>
        <Emoji />
        <BitcoinRates />
      </div>
    </MoodProvider>
  );
}

export default App;