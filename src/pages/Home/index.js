import { useNavigate } from "react-router-dom";
import { img } from "../../assets/images";
import { useRef } from "react";

const Home = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const humasPage = () => {
    navigate("/layanan/humas");
  };

  const perpustakaanPage = () => {
    navigate("/layanan/perpustakaan");
  };

  const keamananPage = () => {
    navigate("/layanan/keamanan");
  };

  const kesehatanPage = () => {
    navigate("/layanan/kesehatan");
  };

  const kopmaPage = () => {
    navigate("/layanan/kopma");
  };

  const hscPage = () => {
    navigate("/layanan/hsc");
  };

  return (
    <div className="bg-gray font-poppins">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row mt-16 md:mt-0 pt-20 lg:pt-12 justify-between gap-20 md:gap-0">
          <div className="flex flex-col md:flex-1 items-center my-auto px-7 text-center">
            <h1 className="text-4xl lg:text-6xl font-semibold">UNY DiSign</h1>
            <h3 className="text-xl lg:text-2xl font-normal my-5">
              Kamus Digital Bahasa Isyarat Praktis
            </h3>
            <button
              onClick={handleClick}
              className="bg-blue text-md lg:text-lg font-bold text-white px-10 py-2 rounded-full">
              MULAI
            </button>
          </div>
          <div className="w-full md:flex-1">
            <div>
              <img
                className="w-full mx-auto"
                src={img.imgHero}
                alt="hero section"
              />
            </div>
            <div className="bg-blue py-6 rounded-b-3xl md:hidden"></div>
          </div>
        </div>
        <div className="bg-blue hidden md:block py-6 rounded-b-3xl"></div>
      </div>

      {/* Start Layanan */}

      <div
        ref={ref}
        className="flex flex-col items-center py-24 px-7 bg-[url('../../assets/images/bg-layanan.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-4xl font-bold">Layanan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-10">
          <div
            onClick={humasPage}
            className="flex flex-col items-center px-16 py-10 justify-between rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icHumas} alt="Humas" />
            <h1 className="text-xl font-semibold mt-5">Humas</h1>
          </div>
          <div
            onClick={perpustakaanPage}
            className="flex flex-col items-center px-16 py-10 justify-between rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icPerpustakaan} alt="Perpustakaan" />
            <h1 className="text-xl font-semibold mt-5">Perpustakaan</h1>
          </div>
          <div
            onClick={keamananPage}
            className="flex flex-col items-center px-16 py-10 justify-between rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icKeamanan} alt="Keamanan" />
            <h1 className="text-xl font-semibold mt-5">Keamanan</h1>
          </div>
          <div
            onClick={kesehatanPage}
            className="flex flex-col items-center px-16 py-10 justify-between rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icKesehatan} alt="Kesehatan" />
            <h1 className="text-xl font-semibold mt-5 text-center">
              Layanan <br /> Kesehatan
            </h1>
          </div>
          <div
            onClick={kopmaPage}
            className="flex flex-col items-center px-16 py-10 justify-between rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icKopma} alt="Kopma" />
            <h1 className="text-xl font-semibold mt-5">Kopma</h1>
          </div>
          <div
            onClick={hscPage}
            className="flex flex-col items-center px-16 py-10 justify-between rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icHsc} alt="HSC" />
            <h1 className="text-xl font-semibold mt-5">HSC</h1>
          </div>
        </div>
      </div>

      {/* End Layanan */}
    </div>
  );
};

export default Home;
