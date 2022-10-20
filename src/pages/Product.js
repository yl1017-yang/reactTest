import { Button, ButtonGroup, Table, Row, Col } from "react-bootstrap";

function Product() {
  return (
    <>
      <h2 className="title-h2">브랜드/상품관리</h2>

      <Row className="mt-2">
        <Col xl="4">

          <Row className="mt-4">
            <Col>
              <h3 className="title-h3">브랜드</h3>
            </Col>
            <Col className="text-end">
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">브랜드등록</Button>
                <Button type="reset" value="Reset" variant="outline-primary" className="ms-2">새로고침</Button>
              </ButtonGroup>
            </Col>
          </Row>

          <Table responsive="md" className="tbl-type1 mt-3">
            <thead>
              <tr>
                <th>브랜드명</th>
                <th>상품</th>
                <th>수정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>그린마운틴 커피</td>
                <td>1</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>글로리아진스</td>
                <td>1</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>던킨도넛</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>라라</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>라바짜</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>래핑맨</td>
                <td>1</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>마카롱</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>맴버스마크</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>밀키트</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>바리스타프리마</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>스내플</td>
                <td>1</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>스위스미스</td>
                <td>1</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
              <tr>
                <td>스타벅스</td>
                <td>0</td>
                <td><Button variant="outline-primary" size="sm">수정</Button></td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col xl="8">
          <Row className="mt-4">
            <Col>
              <h3 className="title-h3">상품</h3>
            </Col>
            <Col className="text-end">
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">상품등록</Button>
              </ButtonGroup>
            </Col>
          </Row>

          <Table responsive="md" className="tbl-type1 mt-3">
            <thead>
              <tr>
                <th>브랜드명</th>
                <th>상품</th>
                <th>투출타입</th>
                <th>단위</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>그린마운틴 커피</td>
                <td>1</td>
                <td>투출</td>
                <td>낱개</td>
                <td></td>
              </tr>
              <tr>
                <td>글로리아진스</td>
                <td>1</td>
                <td>투출</td>
                <td>낱개</td>
                <td></td>
              </tr>
              <tr>
                <td>던킨도넛</td>
                <td>0</td>
                <td>투출</td>
                <td>낱개</td>
                <td></td>
              </tr>
              <tr>
                <td>라라</td>
                <td>0</td>
                <td>투출</td>
                <td>낱개</td>
                <td></td>
              </tr>
              <tr>
                <td>라바짜</td>
                <td>0</td>
                <td>투출</td>
                <td>낱개</td>
                <td></td>
              </tr>
              <tr>
                <td>래핑맨</td>
                <td>1</td>
                <td>투출</td>
                <td>낱개</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

    </>
  )
}

export default Product;