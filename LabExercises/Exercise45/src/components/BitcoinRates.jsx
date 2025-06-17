import { useEffect, useState } from 'react';
import { useMood } from '../context/useMood';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(null);
  const { mood } = useMood();

  useEffect(() => {
    let ignore = false;
    const fetchRate = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await res.json();
        if (!ignore) setRate(data.bitcoin[currency.toLowerCase()]);
      } catch (err) {
        console.error('Error fetching Bitcoin rate:', err);
      }
    };

    fetchRate();
    return () => {
      ignore = true;
    };
  }, [currency]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <p>Current Mood Emoji: {mood}</p>
      <label>
        Choose currency:{' '}
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {currencies.map(curr => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>
      <div style={{ marginTop: '1rem' }}>
        {rate !== null ? (
          <strong>Bitcoin Rate: {rate} {currency}</strong>
        ) : (
          <em>Loading...</em>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;
