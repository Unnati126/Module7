import { createContext, useState } from 'react';

// Create context
export const MoodContext = createContext();

// Export component only from this file
const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState('😊');

  const toggleMood = () => {
    setMood((prev) => (prev === '😊' ? '😢' : '😊'));
  };

  return (
    <MoodContext.Provider value={{ mood, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export default MoodProvider;