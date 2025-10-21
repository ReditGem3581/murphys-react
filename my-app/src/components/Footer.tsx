"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container fluid style={{ backgroundColor: "#1B4F24" }}>
        <Container>
          <Row className="py-4">
            <Col md>
              <h5>About</h5>
              <p className="mb-0">Local pub serving great food and beer since 1987.</p>
            </Col>
            <Col md>
              <h5>Location</h5>
              <p className="mb-0">2 Merchant St, Honolulu, HI</p>
              <p className="mb-0">Mon–Sun: 11am – 10pm</p>
            </Col>
            <Col md>
              <h5>Contact</h5>
              <p className="mb-0">(808) 531-0422</p>
              <p className="mb-0">info@murphys.com</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
