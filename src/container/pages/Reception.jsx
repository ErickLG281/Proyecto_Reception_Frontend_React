import React, { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { useParams } from "react-router-dom";
import CardReception from "../../components/reception/CardReception";
import Category from "../../components/reception/Category";

function Reception() {
  const params = useParams();

  return (
    <>
      <Navbar />
      <div className="pt-28">
        {params.id ? <CardReception /> : <Category/> }
      </div>
      <Footer />
    </>
  );
}
export default Reception;
