import axios from "axios";

export const getDictionary = async () => {
  const dictionary = await axios.get(`${process.env.BASE_URL}`);
  console.log({ dictionaryList: dictionary });
};

export const searchDictionary = async (q) => {
  const search = await axios.get(q);
  return search;
};
