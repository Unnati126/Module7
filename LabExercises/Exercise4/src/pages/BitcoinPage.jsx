import BitcoinRates from '../components/BitcoinRates';

function BitcoinPage() {
    return (
    <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        paddingTop: '4rem',
        paddingLeft: '2rem',
      }}
    >
            <h2>Bitcoin Exchange Rate</h2>
            <BitcoinRates />
        </div>
    );
}

export default BitcoinPage;