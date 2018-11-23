import Header from './header';

const Layout = (props) => (
  <div >

      <Header />
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          min-height: 55em;
        }
      `}</style>
      <style jsx>{`
        div {
          background: linear-gradient(45deg, ${props.color1} 20%, ${props.color2} 50%, ${props.color3} 85%);
        }
      `}</style>
      <style jsx global>{`
        h1 {
          color: #373737;
          font-size: 3.0em;
          font-weight: 800;
          margin: .5em .5em;
        }
      `}</style>

  </div>
)


export default Layout;


// background: linear-gradient(45deg, white 0%, #3f6fff 49%, black 82%);