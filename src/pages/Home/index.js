import { img } from "../../assets/images";

const Home = () => {
  return (
    <div className="bg-gray font-poppins">
      <div className="flex flex-col md:flex-row mt-16 md:mt-0 pt-20">
        <div className="flex flex-col md:flex-1 items-center my-auto">
          <h1 className="text-4xl font-semibold">UNY DiSign</h1>
          <h3 className="text-xl font-normal my-5">
            Kamus Digital Bahasa Isyarat Praktis
          </h3>
          <button className="bg-blue text-md font-bold text-white px-10 py-2 rounded-full">
            MULAI
          </button>
        </div>
        <div className="w-full md:flex-1 self-end mt-20 px-10">
          <div>
            <img
              className="w-full mx-auto"
              src={img.imgHero}
              alt="image hero section"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue py-6 rounded-b-full"></div>

      {/* Start Layanan */}

      <div className="flex flex-col items-center py-24 ">
        <h1 className="text-4xl font-semibold">Layanan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-10">
          <div className="flex flex-col items-center px-16 py-10 rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icHumas} />
            <h1 className="text-xl font-semibold mt-5">Humas</h1>
          </div>
          <div className="flex flex-col items-center px-16 py-10 rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icPerpustakaan} />
            <h1 className="text-xl font-semibold mt-5">Perpustakaan</h1>
          </div>
          <div className="flex flex-col items-center px-16 py-10 rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icKeamanan} />
            <h1 className="text-xl font-semibold mt-5">Keamanan</h1>
          </div>
          <div className="flex flex-col items-center px-16 py-10 rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icKesehatan} />
            <h1 className="text-xl font-semibold mt-5 text-center">
              Layanan <br /> Kesehatan
            </h1>
          </div>
          <div className="flex flex-col items-center px-16 py-10 rounded-2xl bg-white hover:bg-orange hover:text-white cursor-pointer">
            <img src={img.icHsc} />
            <h1 className="text-xl font-semibold mt-5">HSC</h1>
          </div>
        </div>
      </div>

      {/* End Layanan */}
    </div>
  );
};

export default Home;
