import { useMood } from '../context/useMood';

function Emoji() {
  const { mood, toggleMood } = useMood();

  return (
    <div style={{ fontSize: '2.5rem', margin: '1rem 0' }}>
      <p>{mood}</p>
      <button
        onClick={toggleMood}
        style={{
          fontSize: '0.9rem',
          padding: '0.4rem 0.8rem',
          marginTop: '0.5rem',
          cursor: 'pointer',
        }}
      >
        Change Mood
      </button>
    </div>
  );
}

export default Emoji;