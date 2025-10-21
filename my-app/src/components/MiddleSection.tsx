"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function MiddleSection() {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          style={{
            height: 650,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div>
            <h1>Welcome to Murphy&apos;s</h1>
            <p className="lead">Bar & Grill in the heart of Honolulu</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
