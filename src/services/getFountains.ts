import axios from "axios";
import { Fontaine } from "../types";

const getFountains = async () => {
  const results: Fontaine[] = [];
  for (let i = 0; i <= 1300; i += 100) {
    const partial_results: {
      data: { total_count: number; results: Fontaine[] };
    } = await axios.get(
      `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?order_by=commune&limit=-1&offset=${i}`
    );
    results.push(...partial_results.data.results);
  }
  return results;
};

export default getFountains;
