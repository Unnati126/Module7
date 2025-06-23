import { useContext } from 'react';
import { MoodContext } from './MoodProvider';

export const useMood = () => useContext(MoodContext);