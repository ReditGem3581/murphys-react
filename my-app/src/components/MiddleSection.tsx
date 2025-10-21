"use client";

import { Row, Col } from "react-bootstrap";

export default function MiddleSection() {
  return (
    <Row className="d-flex align-items-center justify-content-center" id="centerText">
      <Col xs={8} className="text-center">
        <h1>Now accepting reservations for St Patrick&apos;s Day</h1>
        <h1 className="h1">Please call 808-531-0422 for reservations</h1>
        <h1 className="h1">St Patrick&apos;s Day To-Go Orders can be ordered on our website menu.</h1>
      </Col>
    </Row>
  );
}
