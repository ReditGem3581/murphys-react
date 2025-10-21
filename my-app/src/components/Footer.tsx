"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3" id="bottomMenu">
      <Container>
        <Row>
          <Col>
            <strong>Lunch</strong>
            <hr />
            Monday - Friday: 11:00am - 2:30pm<br />
            Saturday - Sunday: Not open
          </Col>
          <Col>
            <strong>Bar</strong>
            <hr />
            Monday - Friday: From 11:00am to closing<br />
            Saturday - Sunday: Not open
          </Col>
          <Col>
            <strong>Dinner</strong>
            <hr />
            Monday - Friday: 5:00pm - 9:00pm<br />
            Saturday - Sunday: Not open
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
