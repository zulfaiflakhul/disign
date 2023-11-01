import { img } from "../assets/images";

const Footer = () => {
  return (
    <div className="bg-blue">
      <div className="flex flex-col py-10 text-white items-center">
        <h1 className="text-xl">Berkolaborasi dengan:</h1>
        <h1 className="text-xl lg:text-2xl text-center font-bold mt-5">
          Mahasiswa Tuli <br />
          Universitas Negeri Yogyakarta
        </h1>
        <img className="my-10" src={img.logoSeeListen} alt="logo see listen" />
        <p className="text-sm text-center">
          Universitas Negeri Yogyakarta <br />
          Jl. Colombo No.1 Karangmalang Yogyakarta 55281 <br /> Telp :
          0274-586168 | +62274542185
        </p>
        <p className="text-sm mt-10">Copyright © 2023 TIM DiSign UNY</p>
      </div>
    </div>
  );
};

export default Footer;
