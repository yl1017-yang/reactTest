// /* eslint-disable */  //warning Lint 끄는 기능

import "./assets/styles/reset.css";
import "./assets/styles/common.css";
// import RoutesMap from "./RoutesMap"; //일반 라우터 설치

//https://velog.io/@cheonjae6/15%EA%B0%95-%EC%83%88%EB%A1%9C%EC%9A%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1-Bootstrap-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from './routes/detail';

function App() {

    let navigate = useNavigate();

    return( 
        // <RoutesMap />  //일반 라우터 설치

        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => { navigate(-1) }}>Home</Nav.Link>
                    <Nav.Link onClick={() => { navigate('detail')}}>Detail</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            
            {/* <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link> */}
            

            <Routes>
                <Route path='/' element={
                    <>
                        <Container>
                        <Row>
                            <Col sm>
                            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"></img>
                            <h4>상품명</h4>
                            <p>상품설명</p>
                            </Col>
                            <Col sm>
                            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"></img>
                            <h4>상품명</h4>
                            <p>상품설명</p>
                            </Col>
                            <Col sm>
                            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"></img>
                            <h4>상품명</h4>
                            <p>상품설명</p>
                            </Col>
                        </Row>
                        </Container>
                    </>
                }/>

                
                <Route path='/detail' element={<Detail />} />

                <Route path='*' element={<div>없는 페이지임.</div>} />
                <Route path='/about' element={<About/>}>
                    <Route path='member' element={<div>멤버임</div>} />
                    <Route path='location' element={<div>위치정보임</div>} />
                </Route>
                <Route path='/event' element={<EventPage/>}>
                    <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
                    <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
                </Route>


            </Routes>

        </div>


    );
}

function About() {
    return (
      <div>
        <h4>회사정보임</h4>
            <Outlet></Outlet>
      </div>
    );
}

  function EventPage() {
    return (
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    )
  }

export default App;
