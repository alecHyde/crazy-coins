import Link from 'next/link';

const Header = () => (
  <div className="header">
 
    <Link href="/">
      <div className="button">Home</div>
    </Link>
    <Link href="/Ruble">
      <div className="button">Russia - Ruble (RUB)</div>
    </Link>
    <Link href="/Rand">
      <div className="button">South Africa - Rand (ZAR)</div>
    </Link>
    <Link href="/Lira">
      <div className="button">Turkey - Lira (TRY)</div>
    </Link>
    <Link href="/Bitcoin">
      <div className="button">Crypto - Bitcoin (BTC)</div>
    </Link>
    <Link href="/Etherium">
      <div className="button">Crypto - Etherium (ETH)</div>
    </Link>

    <style jsx>{`
      .button {
        display: inline flex;
        flex-direction: row;
        flex-wrap: wrap; 
        text-align: center;
        padding: 0.25em 0.75em;
        margin: 0.5em 0.3em;
        border-bottom: 1px solid #C0B283;
        background: #373737;
        color: #F4F4F4;
        font-weight: 100;
        font-size: 1.0em;
      }
      .button:hover {
        color: #C0B283;
      }
      .header {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        border-bottom: 8px solid #C0B283;
        background: #373737;
      }
    `}</style>
    

  </div>
)

// charcoal - #373737
// silk - #DCD0C0
// pale gold - #C0B283
// paper - #F4F4F4

export default Header;