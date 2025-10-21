import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import TopMenu from "@/components/TopMenu";
import MiddleSection from "@/components/MiddleSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopMenu />
      <MiddleSection />
      <Footer />
    </div>
  );
}
