import axios from "axios";
import { img } from "../../../assets/images";
import { useEffect, useState } from "react";

const Perpustakaan = () => {
  // Fetch Data filter by category

  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://103.181.182.174/api/kata").then((result) => {
      const dictionary = result.data;
      const dictPerpus = dictionary.filter(
        (dictionary) => dictionary.service.name === "Perpustakaan"
      );
      setPost(dictPerpus);
    });
  }, []);

  return (
    <div className="bg-gray">
      <div className="flex flex-col md:flex-row mt-16 px-7 py-10 lg:py-20 text-center items-center lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <img src={img.icPerpustakaan} alt="Humas" className="w-1/2" />
          <h1 className="text-2xl font-bold mb-10 md:mb-0">Perpustakaan</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full md:self-center md:justify-end items-center gap-5">
          <ul className="grid grid-cols-2 gap-5">
            <li>
              <input
                type="checkbox"
                id="kata"
                name="kata"
                value="kata"
                className="hidden peer"
                required
              />
              <label
                htmlFor="kata"
                className="inline-flex items-center justify-between w-full px-12 py-2 md:p-2 text-gray-500 bg-gray-second  rounded-lg cursor-pointer peer-checked:bg-orange peer-checked:text-white hover:text-white hover:bg-orange ">
                <div className="w-full text-lg font-semibold">Kata</div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="kalimat"
                name="kalimat"
                value="kalimat"
                className="hidden peer"
                required
              />
              <label
                htmlFor="kalimat"
                className="inline-flex items-center justify-between w-full px-12 py-2 md:px-5 md:py-2 lg:px-10 text-gray-500 bg-gray-second rounded-lg cursor-pointer peer-checked:bg-orange peer-checked:text-white hover:text-white hover:bg-orange ">
                <div className="w-full text-lg font-semibold">Kalimat</div>
              </label>
            </li>
          </ul>
          <div className="relative mt-5 md:mt-0 w-full md:w-auto">
            <input
              type="search"
              className="bg-purple-white shadow rounded border-0 p-3 w-full focus:outline-none"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute text-purple-lighter bottom-3 right-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px">
                <path
                  d="M22.95 24.875L14.2875 16.2125C13.6 16.7625 12.8094 17.1979 11.9156 17.5187C11.0219 17.8396 10.0708 18 9.0625 18C6.56458 18 4.45075 17.1347 2.721 15.404C0.99125 13.6733 0.125917 11.5595 0.125 9.0625C0.125 6.56458 0.990333 4.45075 2.721 2.721C4.45167 0.99125 6.5655 0.125917 9.0625 0.125C11.5604 0.125 13.6743 0.990333 15.404 2.721C17.1338 4.45167 17.9991 6.5655 18 9.0625C18 10.0708 17.8396 11.0219 17.5187 11.9156C17.1979 12.8094 16.7625 13.6 16.2125 14.2875L24.875 22.95L22.95 24.875ZM9.0625 15.25C10.7812 15.25 12.2424 14.6482 13.446 13.4446C14.6496 12.241 15.2509 10.7803 15.25 9.0625C15.25 7.34375 14.6482 5.88258 13.4446 4.679C12.241 3.47542 10.7803 2.87408 9.0625 2.875C7.34375 2.875 5.88258 3.47679 4.679 4.68038C3.47542 5.88396 2.87408 7.34467 2.875 9.0625C2.875 10.7812 3.47679 12.2424 4.68038 13.446C5.88396 14.6496 7.34467 15.2509 9.0625 15.25Z"
                  fill="#787878"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-7 lg:px-20 pb-20">
        {post
          .filter((post) => {
            if (search === "") {
              return post;
            } else if (post.name.toLowerCase().includes(search.toLowerCase())) {
              return post;
            }
          })
          .map((post) => {
            return (
              <div key={post.id} className="text-center">
                <video controls width="100%">
                  <source src={post.videos[0].url} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <div className="bg-black-46 py-3 rounded-b-md">
                  <h4 className="text-xl font-bold text-white">{post.name}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Perpustakaan;
