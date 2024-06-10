import axios from "axios";
import { useMap } from "./useMap";

export const getDataApi = async () => {
  const apiURL = 'https://rickandmortyapi.com/api/character';
  const resp = await axios.get(apiURL);
  const { results } = resp.data;
  const resultMap = useMap(results);
  return resultMap;
};
