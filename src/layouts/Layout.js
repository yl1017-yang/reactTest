import Header from "../components/Header";
import Footer from "../components/Footer";
import Lnb from "../components/Lnb";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// https://react-bootstrap.github.io/layout/breakpoints/

function Layout(){
    return( 
    <div>
        <Header/>
        <Container>
            <Row>
                <Col md={4} lg={2}><Lnb/></Col>
                <Col md={8} lg={10}><Outlet/></Col>
            </Row>
        </Container>
        <Footer/>
    </div>
    )
}

export default Layout;