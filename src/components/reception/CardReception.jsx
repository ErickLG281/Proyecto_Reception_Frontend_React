import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsPeople } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { VscVerified } from "react-icons/vsc";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReceptions } from "../../api/company.api";

function CardReception() {
  const [receptions, setReceptions] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    async function loadReceptions() {
      if (params.id) {
        const response = await getReceptions(params.id);
        console.log(response.data);
        setReceptions(response.data);
        setTitle(params.name);
      }
    }

    loadReceptions().catch();
  }, []);

  return (
    <>
      <div className="relative mx-auto max-w-7xl p-4 mb-8">
        {title && (
          <>
            <h1 className="text-4xl font-semibold">{title} Receptions</h1>
          </>
        )}
      </div>
      <div className="mx-auto max-w-7xl  px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-8 justify-items-center items-center mb-20">
        {receptions.map((reception) => (
          <Link to="" key={reception.name}>
            <div className=" max-w-sm bg-[#1F2125] w-96 rounded-lg overflow-hidden relative mx-auto mb-8 hover:bg-[#26292F] transition duration-300 ease-in-out">
              <Carousel
                autoPlay
                infiniteLoop
                interval={2000}
                showThumbs={false}
                showStatus={false}
              >
                {reception.images.map((image) => (
                  <img key={image.id} src={image.urlImage} className="w-96 h-60"/>
                ))}
              </Carousel>
              <div className="px-5 pb-5 pt-4">
                <h2 className="text-xl font-semibold tracking-tight text-[#dadada] hover:text-[#e69d00] transition duration-300 ease-in-out uppercase">
                  {reception.name}
                </h2>
                <div className="flex items-center mt-2.5 mb-1">
                  {reception.rating > 0 && (
                    <>
                      <VscVerified />
                      <span className="bg-[#303641] text-[#dadada] text-xs font-bold px-2.5 py-0.5 rounded ms-1 mr-2">
                        {reception.rating}
                      </span>
                    </>
                  )}

                  <span className="flex items-center gap-2 font-normal text-[#dadada]">
                    <MdOutlineLocationOn />
                    {reception.location}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center gap-2 font-normal text-[#dadada]">
                    <GrMoney />
                    From S/ {reception.initialPrice}
                  </span>
                  <span className="flex items-center gap-2 font-normal text-[#dadada]">
                    <BsPeople />
                    {reception.minQuantity} to {reception.maxQuantity}
                  </span>
                </div>
                <button className="inline-block w-full rounded-lg bg-[#e69d00] pb-2.5 pt-2.5 text-sm font-bold uppercase leading-normal text-black hover:bg-[#ffb20c] transition duration-300 ease-in-out text-center">
                  information
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CardReception;
