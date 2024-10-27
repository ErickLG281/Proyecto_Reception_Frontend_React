import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import Start from "../../components/home/start";

function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <Start/>
      </div>
      <Footer />
    </>
  );
}
export default Home;
