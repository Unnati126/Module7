import { useContext } from 'react';
import { MoodContext } from './MoodProvider';

export const useMood = () => useContext(MoodContext);


/*import { useContext } from 'react';
import { MoodContext } from './MoodContext';

export const useMood = () => useContext(MoodContext);*/