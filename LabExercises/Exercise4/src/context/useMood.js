import { useContext } from 'react';
import MoodContext from './MoodContext';

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMood must be used inside MoodProvider');
  }
  return context;
}