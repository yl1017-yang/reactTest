// 리액트 링크 : https://react-router.vlpt.us/1/03.html

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header(){
  let navigate = useNavigate();

  return(    

    <Navbar bg="" variant="" id="top-nav">
      <Container>
        <Row>
          {/* <Navbar.Brand href="#home">Cafesi</Navbar.Brand> */}
          <Navbar.Brand onClick={() => { navigate('/reactTest/') }}>Café si</Navbar.Brand>
        </Row>

        <Row>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/reactTest/') }}>메인</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reactTest/Page1')}}>관리자</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reactTest/Page2')}}>현황</Nav.Link>
            <Nav.Link href="#deets">로그아웃</Nav.Link>
            {/* <Link exact to="/reactTest/">메인</Link> */}
            {/* <Nav.Link href="#features">서브페이지-1</Nav.Link> */}
            {/* <Nav.Link href="#pricing">서브페이지-2</Nav.Link> */}
          </Nav>
        </Row>

        <Row>
          id1234 [ 농부들의 카페장터 ] [ 1911275 ] [ s ] [ 100.100.123.123 ] 로그인 상태입니다
        </Row>
        
      </Container>
    </Navbar>



  )
}

export default Header;