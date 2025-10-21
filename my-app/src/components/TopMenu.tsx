"use client";

import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";

export default function TopMenu() {
  return (
    <div className="px-0 justify-content-center pb-2" id="topMenu">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <Image src="/murphyslogowhite.png" alt="Murphy's" width={200} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#stpatricks">St. Patrick&apos;s Day</Nav.Link>
              <Nav.Link href="#ordering">To Go Ordering</Nav.Link>
              <Nav.Link href="#instagram"><Instagram /></Nav.Link>
              <Nav.Link href="#facebook"><Facebook /></Nav.Link>
              <Nav.Link href="#twitter"><Twitter /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
