import { Table, Row, Col, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function SalesDetail() {
  return (
    <>
      <h2 className="title-h2">매출상세조회</h2>

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

      <Row className="mt-5">
        <Col xl="3">
          <h3 className="title-h3">총판 (20건)</h3>
          <Table responsive="md" className="tbl-type1">
            <thead>
              <tr>
                <th>No</th>
                <th>총판명 [대리점/자판기]</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>(SC-520)개발팀 <span className="tag-exclu-01">2</span> <span className="tag-exclu-02">11</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>(주)르호봇 <span className="tag-exclu-01">1</span> <span className="tag-exclu-02">1</span></td>
                <td><span className="txt-exclu-case">7건</span> <span className="txt-exclu-price">100,385</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>(주)베스코 <span className="tag-exclu-01">11</span> <span className="tag-exclu-02">58</span></td>
                <td><span className="txt-exclu-case">0건</span> <span className="txt-exclu-price">0</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>(SC-520)개발팀 <span className="tag-exclu-01">2</span> <span className="tag-exclu-02">11</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>(주)르호봇 <span className="tag-exclu-01">1</span> <span className="tag-exclu-02">1</span></td>
                <td><span className="txt-exclu-case">7건</span> <span className="txt-exclu-price">100,385</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td>(주)베스코 <span className="tag-exclu-01">11</span> <span className="tag-exclu-02">58</span></td>
                <td><span className="txt-exclu-case">0건</span> <span className="txt-exclu-price">0</span></td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col xl="3">
          <h3 className="title-h3">SC-520개발팀 (1283)</h3>
          <Table responsive="md" className="tbl-type1">
            <thead>
              <tr>
                <th>No</th>
                <th>대리점명 [자판기]</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>개발팀 <span className="tag-exclu-01">5</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>(SC-520)개발팀 <span className="tag-exclu-01">2</span> <span className="tag-exclu-02">11</span></td>
                <td><span className="txt-exclu-case">17건</span> <span className="txt-exclu-price">988,385</span></td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col xl="6">
          <h3 className="title-h3">SC-520 개발팀 대리점 전체</h3>
          <Table responsive="md" className="tbl-type1">
            <thead>
              <tr>
                <th>No</th>
                <th>설치장소-자판기번</th>
                <th>
                  통신
                  {['right'].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          안내메시지
                        </Tooltip>
                      }
                    >
                      <Button variant="">{placement}</Button>
                    </OverlayTrigger>
                  ))}
                </th>
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
                <td><span className="tag-comm-request">점검요청</span></td>
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
                <td><span className="tag-comm-unused">장기미사용</span></td>
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
                <td><span className="tag-comm-normal">정상</span></td>
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
                <td><span className="tag-comm-none">이력없음</span></td>
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
        </Col>
      </Row>

    </>
  )
}

export default SalesDetail;