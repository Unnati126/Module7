import { useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  error: null,
  rate: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { loading: false, error: null, rate: action.payload };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, rate: null };
    default:
      return state;
  }
}

function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;

    const fetchRate = async () => {
      dispatch({ type: 'FETCH_START' });

      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await res.json();
        if (isMounted) {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: data.bitcoin[currency.toLowerCase()],
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (isMounted) {
          dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch data' });
        }
      }
    };

    fetchRate();

    return () => {
      isMounted = false;
    };
  }, [currency]);

  return state; // { loading, error, rate }
}

export default useBitcoinRate;
