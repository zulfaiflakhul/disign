import axios from "axios";
import { img } from "../../../assets/images";
import { useEffect, useState } from "react";

const Humas = () => {
  // Fetch Data filter by category

  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://103.181.182.174/api/kata").then((result) => {
      const dictionary = result.data;
      const dictHumas = dictionary.filter(
        (dictionary) => dictionary.service.name === "Humas"
      );
      setPost(dictHumas);
    });
  }, []);

  return (
    <div className="bg-gray">
      <div className="flex flex-col md:flex-row mt-16 px-5 py-10 lg:py-20 text-center items-center lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <img src={img.icHumas} alt="Humas" className="w-1/2" />
          <h1 className="text-2xl font-bold mb-10 md:mb-0">Humas</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full md:self-center md:justify-end items-center gap-5">
          <ul className="grid grid-cols-2 gap-5">
            <li>
              <input
                type="checkbox"
                id="kata"
                name="kata"
                value="kata"
                className="hidden peer z-1"
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
          <div className="flex mt-5 md:mt-0 w-full md:w-auto">
            <input
              type="search"
              className="bg-purple-white shadow rounded border-0 p-3 w-full focus:outline-none"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-5 lg:px-20 pb-20">
        {post
          //eslint-disable-next-line
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
                <div className="bg-black-46 pt-1 pb-2 rounded-b-md">
                  <h4 className="text-lg font-semibold text-white">
                    {post.name}
                  </h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Humas;
