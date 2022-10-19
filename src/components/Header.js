// 리액트 링크 : https://react-router.vlpt.us/1/03.html
// css 수정 : https://think0wise.tistory.com/m/24
// 아이콘: https://react-icons.github.io/react-icons/icons?name=io5

import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SlHome, SlPeople, SlSettings } from "react-icons/sl";

function Header(){
  let navigate = useNavigate();

  return(    

    <Navbar bg="" variant="">
      <Container fluid="xxl" >
        {/* <Row> */}
          <Col sm="2">
            {/* <Navbar.Brand href="#home">Cafesi</Navbar.Brand> */}
            <Navbar.Brand onClick={() => { navigate('/reactTest/') }}>Café si</Navbar.Brand>
          </Col>

          <Col sm="6">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/reactTest/') }}><SlHome size="18"/> 메인</Nav.Link>
              <Nav.Link onClick={() => { navigate('/reactTest/Page1')}}><SlPeople size="18"/> 관리자화면</Nav.Link>
              <Nav.Link onClick={() => { navigate('/reactTest/Page2')}}><SlSettings size="18"/> 현황자료</Nav.Link>
              
              {/* <Link exact to="/reactTest/">메인</Link> */}
              {/* <Nav.Link href="#features">서브페이지-1</Nav.Link> */}
              {/* <Nav.Link href="#pricing">서브페이지-2</Nav.Link> */}
            </Nav>
          </Col>

          <Col sm="4">
            <Row>
              <Col sm="9">
                id1234 [ 농부들의 카페장터 ] [ 1911275 ] <br/>
                [ s ] [ 100.100.123.123 ] 로그인 상태입니다
              </Col>
              <Col sm="3" className="text-end">
                <Button variant="primary" size="sm">로그아웃</Button>
              </Col>
            </Row>
          </Col>
        {/* </Row> */}
        
      </Container>
    </Navbar>



  )
}

export default Header;