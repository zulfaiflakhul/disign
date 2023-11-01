import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const Kontak = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="flex flex-col bg-gray items-center h-screen pt-96">
          <RiseLoader color={"#E25822"} loading={loading} size={10} />
        </div>
      ) : (
        <div className="flex flex-col bg-gray pt-20 px-5 font-poppins md:px-20 lg:px-96 lg:mt-10 lg:pb-10">
          <div className="py-10 lg:px-20">
            <h1 className="text-2xl font-semibold md:text-center">
              Contact Us
            </h1>
            <p className="font-light md:text-center">
              Kami disini untukmu! <br /> Kritik dan saran penambahan bahasa
              bisa disanmpaikan disini 😊
            </p>
            <form className="mt-10">
              <div className="flex flex-col gap-3">
                <label>Name</label>
                <input
                  type="text"
                  className="text-md font-light p-2 focus:outline-none"
                />
                <label>Email</label>
                <input
                  type="email"
                  className="text-md font-light p-2 focus:outline-none"
                />
                <label>Pesan</label>
                <textarea
                  rows={5}
                  className="text-md font-light p-2 focus:outline-none"
                />

                <button className="bg-orange text-lg text-white font-semibold py-2 rounded-2xl mt-5">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Kontak;
