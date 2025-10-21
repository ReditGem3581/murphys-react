"use client";

import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function TopMenu() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#1B4F24" }} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image src="/murphyslogowhite.png" alt="Murphy's" width={120} height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#reservations">Reservations</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
