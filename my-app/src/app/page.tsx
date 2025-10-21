import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container } from "react-bootstrap";
import TopMenu from "@/components/TopMenu";
import MiddleSection from "@/components/MiddleSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Container>
        <TopMenu />
      </Container>
      <MiddleSection />
      <Footer />
    </main>
  );
}
