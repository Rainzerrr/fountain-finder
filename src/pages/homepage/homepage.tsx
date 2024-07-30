import Filters from "../../components/filters/filters";
import MapView from "../../components/map-view/map-view";
import { fontaineType } from "../../components/map-view/custom-marker-config";
import useFilterFountains from "../../hooks/useFilterFountains";
import useFetchFountains from "../../hooks/useFetchFountains";
import "./homepage.scss";

export interface filtersProps {
  availability: string[];
  districts: string[];
  fountainTypes: fontaineType[];
}

const Homepage = () => {
  const fountains = useFetchFountains();

  const {
    filters,
    filteredFountains,
    handleAvailabilityChange,
    handleDistrictChange,
    handleFountainTypeChange,
    resetFilters,
  } = useFilterFountains(fountains);

  return (
    <div className="homepage">
      <Filters
        filters={filters}
        handleAvailabilityChange={handleAvailabilityChange}
        handleFountainTypeChange={handleFountainTypeChange}
        handleDistrictChange={handleDistrictChange}
        resetFilters={resetFilters}
      />
      <MapView fountains={filteredFountains} />
    </div>
  );
};

export default Homepage;
