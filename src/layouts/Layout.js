import Header from "../components/Header";
import Footer from "../components/Footer";
// import Lnb from "../components/Lnb";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

// https://react-bootstrap.github.io/layout/breakpoints/

function Layout(){
    return( 
    <main>
      <Header/>

      {/* <Container fluid="xxl" >
        <Row>
          <Col lg="0" xl="2"><Lnb/></Col>
          <Col lg="12" xl="10"><Outlet/></Col>
        </Row>
      </Container> */}

      <Container fluid >
        <Outlet/>
      </Container>

      <Footer/>
    </main>
    )
}

export default Layout;