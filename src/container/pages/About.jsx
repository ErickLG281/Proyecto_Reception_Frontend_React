import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Team from "../../components/about/Team";
import Values from "../../components/about/Values";
import Title from "../../components/about/Title";

function About() {
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <Title/>
        <Values/>
        <Team />
      </div>
      <Footer />
    </>
  );
}

export default About;
