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
        div{
          background: linear-gradient(45deg, ${props.color1} 20%, ${props.color2} 50%, ${props.color3} 85%);
        }
      `}</style>
  {/*  <style jsx global>{`
      .title {
        color: red,
        font-size: 5.0em;
        font-weight: 800;
      }
    `}</style>*/}

  </div>
)


export default Layout;


// background: linear-gradient(45deg, white 0%, #3f6fff 49%, black 82%);