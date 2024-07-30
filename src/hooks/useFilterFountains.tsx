import { useEffect, useState } from "react";
import { filtersProps } from "../pages/homepage/homepage";
import { fontaineType } from "../components/map-view/custom-marker-config";
import { Fontaine } from "../types";

const useFilterFountains = (fountains: Fontaine[]) => {
  const [filters, setFilters] = useState<filtersProps>({
    availability: [],
    districts: [],
    fountainTypes: [],
  });

  const [filteredFountains, setfilteredFountains] =
    useState<Fontaine[]>(fountains);

  const handleAvailabilityChange = (filter: string) => {
    let updatedFilters;
    if (filters.availability.includes(filter)) {
      updatedFilters = filters.availability.filter(
        (actualFilter: string) => actualFilter !== filter
      );
    } else {
      updatedFilters = [...filters.availability, filter];
    }
    setFilters({ ...filters, availability: updatedFilters });
  };

  const handleDistrictChange = (district: string) => {
    let updatedDistricts;
    if (filters.districts.includes(district)) {
      updatedDistricts = filters.districts.filter(
        (d: string) => d !== district
      );
    } else {
      updatedDistricts = [...filters.districts, district];
    }
    setFilters({ ...filters, districts: updatedDistricts });
  };

  const handleFountainTypeChange = (type: fontaineType) => {
    let updatedFountainTypes;
    if (filters.fountainTypes.includes(type)) {
      updatedFountainTypes = filters.fountainTypes.filter(
        (t: string) => t !== type
      );
    } else {
      updatedFountainTypes = [...filters.fountainTypes, type];
    }
    setFilters({ ...filters, fountainTypes: updatedFountainTypes });
  };

  const filterFountains = () => {
    let tempFountains = fountains;

    if (filters.availability.length > 0) {
      tempFountains = tempFountains.filter((fountain: Fontaine) => {
        if (
          filters.availability.includes("Disponible") &&
          filters.availability.includes("Indisponible")
        ) {
          return true;
        } else if (filters.availability.includes("Disponible")) {
          return fountain.dispo === "OUI";
        } else if (filters.availability.includes("Indisponible")) {
          return fountain.dispo === "NON";
        } else {
          return true;
        }
      });
    }

    if (filters.districts.length > 0) {
      tempFountains = tempFountains.filter((fountain: Fontaine) => {
        return filters.districts.some((district: string) =>
          fountain.commune.includes(district)
        );
      });
    }

    if (filters.fountainTypes.length > 0) {
      tempFountains = tempFountains.filter((fountain: Fontaine) => {
        return filters.fountainTypes.includes(fountain.type_objet);
      });
    }
    return tempFountains;
  };

  const resetFilters = () => {
    setFilters({ availability: [], districts: [], fountainTypes: [] });
  };

  useEffect(() => {
    setfilteredFountains(filterFountains());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    setfilteredFountains(fountains);
  }, [fountains]);

  return {
    filters,
    filteredFountains,
    setfilteredFountains,
    handleAvailabilityChange,
    handleDistrictChange,
    handleFountainTypeChange,
    resetFilters,
  };
};

export default useFilterFountains;
