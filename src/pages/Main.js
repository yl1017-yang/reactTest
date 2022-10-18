import { Container, Row, Col, Form, Button, Table, Pagination } from "react-bootstrap";
// import { BsSearch, BsCaretRightFill, BsCheck } from "react-icons/bs";

function Main(){
  return( 
    <Container>
      <h2 className="title-01">통합관리</h2>
      {/* https://react-icons.github.io/react-icons */}
      {/* <BsSearch size="24" color="blue"/>
      <BsCaretRightFill size="24"/>
      <BsCheck size="24"/> */}

      <Form className="d-flex">
          <span>매출상세조회 결제일시</span>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
      </Form>

      <h3>대리점명</h3>

      {/* 테이블 */}
      <Table responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>설치장소-자판기번</th>
            <th>통신</th>
            <th>랙 상태</th>
            <th>총 결제건수</th>
            <th>카드결제</th>
            <th>쿠폰결제</th>
            <th>총 결제금액</th>
            <th>설치일</th>
            <th>관리연락처</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>36연구소회의실 - 7000</td>
            <td>점검요청</td>
            <td>정상</td>
            <td>32</td>
            <td>215,500</td>
            <td>3,000</td>
            <td>248,500</td>
            <td>2022-12-31</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>36연구소개발방 - 7000</td>
            <td>장기미사용</td>
            <td>점검요청</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>2022-12-31</td>
            <td>010-333-1000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>36연구소서디방 - 7000</td>
            <td>정상</td>
            <td>정상</td>
            <td>15</td>
            <td>0</td>
            <td>15,000</td>
            <td>15,000</td>
            <td>2022-12-31</td>
            <td>010-333-1000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>36연구소소장실 - 7000</td>
            <td>이력없음</td>
            <td>이력없음</td>
            <td>1</td>
            <td>100</td>
            <td>0</td>
            <td>100</td>
            <td>2022-12-31</td>
            <td>-</td>
          </tr>
          <tr>
            <td>5</td>
            <td>36연구소옥상휴게실 - 7000</td>
            <td>-</td>
            <td>-</td>
            <td>3</td>
            <td>1500</td>
            <td>3,000</td>
            <td>4,500</td>
            <td>2022-12-31</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      

    </Container>
  )
}

export default Main;