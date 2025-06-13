import { useState } from 'react';
import MoodContext from './MoodContext';

function MoodProvider({ children }) {
  const [mood, setMood] = useState('😊');

  const toggleMood = () => {
    setMood(prev => (prev === '😊' ? '😢' : '😊'));
  };

  return (
    <MoodContext.Provider value={{ mood, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export default MoodProvider;
