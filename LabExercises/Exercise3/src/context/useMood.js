import { useContext } from 'react';
import { MoodContext } from './MoodContext';

export const useMood = () => useContext(MoodContext);