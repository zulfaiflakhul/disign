import axios from "axios";
import { img } from "../../../assets/images";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const Kopma = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleInputPress = async (e) => {
    let eventEnter = e.key;

    if (eventEnter === "Enter") {
      setSearch(e.target.value);
    }
  };

  const handleChangeCheckbox = (e) => {
    if (e.target.checked) {
      setCategory(e.target.value);
    } else {
      setCategory("");
    }
  };

  const fetchData = () => {
    axios
      .get("https://admin.unydisign.com/api/kata")
      .then((result) => {
        const dictionary = result.data.filter(
          (dictionary) => dictionary.service.name === "Kopma"
        );

        if (category === "") {
          setData(dictionary);
        } else if (category === "All") {
          setData(dictionary);
        } else {
          const filteredData = dictionary.filter(
            (dictionary) => dictionary.category.name === category
          );
          setSearch("");
          setData(filteredData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!location.hash) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      fetchData();
      window.scrollTo(0, 0);
    }

    // eslint-disable-next-line
  }, [location, category]);

  return (
    <>
      {loading ? (
        <div className="flex flex-col bg-gray items-center h-screen pt-96">
          <RiseLoader color={"#E25822"} loading={loading} size={10} />
        </div>
      ) : (
        <div className="bg-gray z-10 font-poppins">
          <div className="flex flex-col md:flex-row mt-16 px-5 py-10 lg:py-20 text-center items-center lg:px-20">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <img src={img.icHumas} alt="Humas" className="w-1/2" />
              <h1 className="text-3xl font-bold mb-10 md:mb-0">Humas</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full md:self-center md:justify-end items-center gap-5">
              <ul className="grid grid-cols-2 gap-5">
                <li>
                  <input
                    onChange={handleChangeCheckbox}
                    type="radio"
                    id="kata"
                    name="category"
                    value="Kata"
                    checked={category === "Kata"}
                    className="hidden peer z-1"
                    required
                  />
                  <label
                    htmlFor="kata"
                    className="inline-flex items-center justify-between w-full px-12 py-2 md:p-2 text-gray-500 bg-gray-second  rounded-lg cursor-pointer peer-checked:bg-orange peer-checked:text-white hover:text-white hover:bg-orange ">
                    <div className="w-full text-md font-semibold">Kata</div>
                  </label>
                </li>
                <li>
                  <input
                    onChange={handleChangeCheckbox}
                    type="radio"
                    id="kalimat"
                    name="category"
                    value="Kalimat"
                    checked={category === "Kalimat"}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="kalimat"
                    className="inline-flex items-center justify-between w-full px-12 py-2 md:px-5 md:py-2 lg:px-10 text-gray-500 bg-gray-second rounded-lg cursor-pointer peer-checked:bg-orange peer-checked:text-white hover:text-white hover:bg-orange ">
                    <div className="w-full text-md font-semibold">Kalimat</div>
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <input
                    onChange={handleChangeCheckbox}
                    type="radio"
                    id="all"
                    name="category"
                    value="All"
                    checked={category === "All"}
                    className="hidden peer z-1"
                    required
                  />
                  <label
                    htmlFor="all"
                    className="inline-flex items-center justify-between w-full px-12 py-2 text-gray-500 bg-gray-second  rounded-lg cursor-pointer peer-checked:bg-orange peer-checked:text-white hover:text-white hover:bg-orange ">
                    <div className="w-full text-md font-semibold">
                      Kata & Kalimat
                    </div>
                  </label>
                </li>
              </ul>
              <div className="flex mt-5 md:mt-0 w-full md:w-auto">
                <input
                  type="search"
                  className="bg-purple-white shadow rounded border-0 p-3 w-full focus:outline-none"
                  placeholder="Search"
                  onKeyUp={handleInputPress}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-5 lg:px-20 pb-20 z-10">
            {data
              //eslint-disable-next-line
              .filter((data) => {
                if (search === "") {
                  return data;
                } else if (
                  data.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return data;
                }
              })
              .map((data) => {
                return (
                  <div key={data.id} className="text-center">
                    <video controls width="100%" playsInline>
                      <source src={data.videos[0].url} type="video/mp4" />
                      Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className="bg-black-46 pt-1 pb-2 rounded-b-md">
                      <h4 className="text-lg font-semibold text-white">
                        {data.name}
                      </h4>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Kopma;
