// 리액트 링크 : https://react-router.vlpt.us/1/03.html
// css 수정 : https://think0wise.tistory.com/m/24
// 아이콘: https://react-icons.github.io/react-icons/icons?name=io5
// https://velog.io/@sangbin2/NavLink-%EC%82%AC%EC%9A%A9%EB%B2%95
// https://blog.naver.com/PostView.naver?blogId=azanghs&logNo=222827522522
// https://samtao.tistory.com/32

import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SlHome, SlPeople, SlSettings } from "react-icons/sl";

function Header() {
  let navigate = useNavigate();

  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-util">
        <Container fluid="xxl">
          <Col sm="2">
            <Navbar.Brand onClick={() => { navigate('/reactTest/') }}>Café si</Navbar.Brand>
          </Col>

          <Col sm="6">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/reactTest/') }}><SlHome size="18" /> 메인</Nav.Link>
              <Nav.Link onClick={() => { navigate('/reactTest/Product') }}><SlPeople size="18" /> 관리자</Nav.Link>
              <Nav.Link onClick={() => { navigate('/reactTest/Integrate') }}><SlSettings size="18" /> 현황</Nav.Link>
              <Nav.Link href="/reactTest/#">Home</Nav.Link>
              <Nav.Link href="/reactTest/#Page1">Features</Nav.Link>
              <Nav.Link href="/reactTest/#Page2">Pricing</Nav.Link>
            </Nav>
          </Col>

          <Col sm="4">
            <Row>
              <Col sm="9" className="text-state">
                id1234 [ 농부들의 카페장터 ] [ 1911275 ] <br />
                [ s ] [ 100.100.123.123 ] 로그인 상태입니다
              </Col>
              <Col sm="3" className="text-end">
                <Button variant="primary" size="sm">로그아웃</Button>
              </Col>
            </Row>
          </Col>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-util">
      <Container fluid="xxl">
          <Navbar.Brand onClick={() => { navigate('/reactTest/') }}>Café si</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/reactTest/') }}><SlHome size="18" /> 메인</Nav.Link>
              <Nav.Link onClick={() => { navigate('/reactTest/Product') }}><SlPeople size="18" /> 관리자</Nav.Link>
              <Nav.Link onClick={() => { navigate('/reactTest/Integrate') }}><SlSettings size="18" /> 현황</Nav.Link>
              {/* <Nav.Link href="/reactTest/#">Home</Nav.Link>
              <Nav.Link href="/reactTest/#Page1">Features</Nav.Link>
              <Nav.Link href="/reactTest/#Page2">Pricing</Nav.Link> */}
            </Nav>

            <div className="text-state">
              id1234 [ 농부들의 카페장터 ] [ 1911275 ] <br />
              [ s ] [ 100.100.123.123 ] 로그인 상태입니다
            </div>
            <Button variant="primary" size="sm">로그아웃</Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="primary" variant="dark" className="header-nav" sticky="top">
        <Container fluid="xxl">
          <Nav className="flex-wrap">
            <Nav.Link onClick={() => { navigate('/reactTest/') }}>매출요인</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reactTest/SalesDetail') }}>매출상세조회</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reactTest/Product') }}>브랜드/상품관리</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reactTest/Menu') }}>메뉴관리</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reactTest/MenuPermission') }}>메뉴권한관리</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reactTest/Integrate') }}>통합관리</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Header;