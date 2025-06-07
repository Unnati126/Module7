import { useMood } from './context/useMood';

function BitcoinRates() {
    const { mood } = useMood();

    return(
        <div style={{ padding: '1rem', fontSize: '1.2rem' }}>
            <p>Current Mood in BitcoinRates: {mood}</p>
        </div>
    );
}

export default BitcoinRates;