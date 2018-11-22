import Link from 'next/link';

const Header = () => (
  <div>
 
    <Link href="/">
      <button>Home</button>
    </Link>
    <Link href="/Ruble">
      <button>Russia - Ruble (RUB)</button>
    </Link>
    <Link href="/Rand">
      <button>South Africa - Rand (ZAR)</button>
    </Link>
    <Link href="/Lira">
      <button>Turkey - Lira (TRY)</button>
    </Link>
    <Link href="/Bitcoin">
      <button>Crypto - Bitcoin (BTC)</button>
    </Link>
    <Link href="/Etherium">
      <button>Crypto - Etherium (ETH)</button>
    </Link>

    <style jsx>{`
      button {
        display: inline flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: 2px solid black; 
        text-align: center;
        padding: 0.25em 0.25em;
        background: white;
        color: black;
      }
      div {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        border: 5px solid black;
        background: blue;
      }
    `}</style>
    

  </div>
)

export default Header;