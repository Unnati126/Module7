import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import BitcoinPage from './pages/BitcoinPage';
import MoodProvider from './context/MoodProvider';

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

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bitcoin" element={<BitcoinPage />} />
        </Routes>
      </Router>
      </div>
    </MoodProvider>
  );
}

export default App;