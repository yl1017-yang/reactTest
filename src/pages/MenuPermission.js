import { Form, Button, ButtonGroup, Table, Row, Col } from "react-bootstrap";

function MenuPermission() {
  return (
    <>
      <h2 className="title-h2">메뉴권한관리</h2>

      <Form className="d-flex">
        <span>상호검색</span>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>

      <Row className="mt-5">
        <Col>
          <h3 className="title-h3">총판</h3>
          <div className="tbl-type1 table-responsive">
            <Table hover>
              <thead>
                <tr>
                  <th>총판명</th>
                  <th>ID</th>
                  <th>이름</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(SC-520)개발팀</td>
                  <td>sc12dev</td>
                  <td>SC520개발팀</td>
                  <td><Button variant="primary" size="sm">선택</Button></td>
                </tr>
                <tr>
                  <td>(주)르호봇</td>
                  <td>sc12dev</td>
                  <td>이영자</td>
                  <td><Button variant="primary" size="sm">선택</Button></td>
                </tr>
                <tr>
                  <td>(주)베스코</td>
                  <td>sc1554</td>
                  <td>하지원</td>
                  <td><Button variant="primary" size="sm">선택</Button></td>
                </tr>
                <tr>
                  <td>(주)잉스코</td>
                  <td>585454</td>
                  <td>송혜교</td>
                  <td><Button variant="primary" size="sm">선택</Button></td>
                </tr>
                <tr>
                  <td>(주)르호봇</td>
                  <td>sc12dev</td>
                  <td>이영자</td>
                  <td><Button variant="primary" size="sm">선택</Button></td>
                </tr>
                <tr>
                  <td>(주)베스코</td>
                  <td>sc1554</td>
                  <td>하지원</td>
                  <td><Button variant="primary" size="sm">선택</Button></td>
                </tr>
                <tr>
                  <td>(주)잉스코</td>
                  <td>585454</td>
                  <td>송혜교</td>
                  <td><Button variant="primary" size="sm">선택</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col>
          <h3 className="title-h3">메뉴명</h3>
          <div className="tbl-type1 table-responsive">
            <Table hover>
              <thead>
                <tr>
                  <th>체크</th>
                  <th>ID</th>
                  <th>메뉴그룹</th>
                  <th>부여가능메뉴</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>체크</td>
                  <td>1</td>
                  <td>관리자</td>
                  <td>기본상품관리</td>
                  <td><Button variant="primary" size="sm">추가</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>2</td>
                  <td>현황</td>
                  <td>매출상세조회</td>
                  <td><Button variant="primary" size="sm">추가</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>3</td>
                  <td>관리자</td>
                  <td>메뉴관리</td>
                  <td><Button variant="primary" size="sm">추가</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>4</td>
                  <td>관리자</td>
                  <td>메뉴권한관리</td>
                  <td><Button variant="primary" size="sm">추가</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>5</td>
                  <td>현황</td>
                  <td>월매출현황</td>
                  <td><Button variant="primary" size="sm">추가</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>6</td>
                  <td>관리자</td>
                  <td>쿠폰관리</td>
                  <td><Button variant="primary" size="sm">추가</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>7</td>
                  <td>관리자</td>
                  <td>통합관리</td>
                  <td><Button variant="primary" size="sm">추가</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col>
          <h3 className="title-h3">메뉴권한관리</h3>
          <div className="tbl-type1 table-responsive">
            <Table hover>
              <thead>
                <tr>
                  <th>체크</th>
                  <th>ID</th>
                  <th>메뉴그룹</th>
                  <th>부여된메뉴</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>체크</td>
                  <td>7</td>
                  <td>관리자</td>
                  <td>통합관리</td>
                  <td><Button variant="primary" size="sm">제거</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>71</td>
                  <td>관리자</td>
                  <td>쿠폰관리</td>
                  <td><Button variant="primary" size="sm">제거</Button></td>
                </tr>
                <tr>
                  <td>체크</td>
                  <td>5</td>
                  <td>현황</td>
                  <td>매출상세조회</td>
                  <td><Button variant="primary" size="sm">제거</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default MenuPermission;