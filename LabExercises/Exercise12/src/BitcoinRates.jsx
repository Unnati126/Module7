import { useEffect, useState } from 'react';

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

export default BitcoinRates;