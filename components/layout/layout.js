import Header from './header';

const Layout = (props) => (
  <div >

      <Header />
      {props.children}
      <style jsx>{`
        div {
          background: #d3d3d3;
          display: flex;
          flex-direction: column;
          min-height: 55em;
        }
      `}</style>

  </div>
)


export default Layout;


// background: linear-gradient(45deg, white 0%, #3f6fff 49%, black 82%);