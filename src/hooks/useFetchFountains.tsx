import { useEffect, useState } from "react";
import getFountains from "../services/getFountains";
import { Fontaine } from "../types";

const useFetchFountains = () => {
  const [fountains, setFountains] = useState<Fontaine[]>([]);
  useEffect(() => {
    const fetchFountains = async () => {
      const fetchedFountains = await getFountains();
      setFountains(fetchedFountains);
    };

    fetchFountains();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return fountains;
};

export default useFetchFountains;
