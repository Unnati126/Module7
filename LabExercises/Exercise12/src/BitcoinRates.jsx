// use custom hook to fetch Bitcoin rates
import { useState } from 'react';
import useBitcoinRate from './hooks/useBitcoinRate';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { loading, error, rate } = useBitcoinRate(currency);

  return (
    <div className="BitcoinRates componentBox" style={{ padding: '1rem' }}>
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:&nbsp;
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {currencies.map(curr => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>

      <div style={{ marginTop: '1rem' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {rate !== null && !loading && !error && (
          <p>
            Current Bitcoin price in {currency}: <strong>{rate}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;










/*import { useEffect, useState } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRate() {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await res.json();
        if (isMounted) {
          setRate(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (isMounted) setRate('Error');
      }
    }

    fetchRate();

    return () => {
      isMounted = false; // Cleanup for unmounted component
    };
  }, [currency]);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox" style={{ padding: '1rem' }}>
      <h2>Bitcoin Exchange Rate</h2>
      <label>
        Choose currency:&nbsp;
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {rate !== null && (
        <p style={{ marginTop: '1rem' }}>
          Current Bitcoin price in {currency}: <strong>{rate}</strong>
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;*/