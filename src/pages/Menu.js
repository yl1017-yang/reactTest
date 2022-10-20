import { Form, Button, Table } from "react-bootstrap";

function Menu() {
  return (
    <>
      <h2 className="title-h2">메뉴관리</h2>

      <Form className="d-flex">
        <span>매출상세조회 결제일시</span>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
      
      <Table responsive="md" className="tbl-type1">
        <thead>
          <tr>
            <th>Id</th>            
            <th>메뉴그룹</th>
            <th>메뉴명</th>
            <th>메뉴경로</th>
            <th>구분</th>
            <th>등록일시</th>
            <th>공통메뉴여부</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9</td>
            <td>현황</td>
            <td>메출상세조회</td>
            <td>/Menu/매출상세조회</td>
            <td>메뉴</td>
            <td>2022-12-31</td>
            <td>아니오</td>
            <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>현황</td>
            <td>월매출현황</td>
            <td>/Menu/월매출현황</td>
            <td>메뉴</td>
            <td>2022-12-31</td>
            <td>아니오</td>
            <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
          </tr>
          <tr>
            <td>7</td>
            <td>관리자</td>
            <td>쿠폰관리</td>
            <td>/Menu/쿠폰관리</td>
            <td>메뉴</td>
            <td>2022-12-31</td>
            <td>아니오</td>
            <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>관리자</td>
            <td>기본상품관리</td>
            <td>/Menu/기본상품관리</td>
            <td>메뉴</td>
            <td>2022-12-31</td>
            <td>아니오</td>
            <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>관리자</td>
            <td>메뉴권한관리</td>
            <td>/Menu/메뉴권한관리</td>
            <td>메뉴</td>
            <td>2022-12-31</td>
            <td>아니오</td>
            <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>관리자</td>
            <td>메뉴관리</td>
            <td>/Menu/메뉴관리</td>
            <td>메뉴</td>
            <td>2022-12-31</td>
            <td>아니오</td>
            <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>관리자</td>
            <td>통합관리</td>
            <td>/Menu/통합관리</td>
            <td>메뉴</td>
            <td>2022-12-31</td>
            <td>아니오</td>
            <td><Button variant="primary" size="sm">부여</Button> <Button variant="primary" size="sm">수정</Button> <Button variant="outline-primary" size="sm">삭제</Button></td>
          </tr>
        </tbody>
      </Table>


    </>
  )
}

export default Menu;