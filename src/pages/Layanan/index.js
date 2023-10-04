import { img } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Layanan = () => {
  const navigate = useNavigate();

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
    <div>
      <div className="flex flex-col items-center py-40 px-7 bg-[url('../../assets/images/bg-layanan.png')] bg-cover bg-center bg-no-repeat">
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
    </div>
  );
};

export default Layanan;
