import FilterButton from "./FilterButton.jsx";
import './Filter.css';
import { useState } from "react";

const Filter = ({
  updateStatus,
  updateGender,
  updateSpecies,
  updatePageNumber,
  updatePageSize, // Sayfa boyutu güncelleme fonksiyonu
  pageSize, // Aktif sayfa boyutu
  stat, // Aktif status durumu
  gender, // Aktif gender durumu
  species // Aktif species durumu
}) => {
  const [activeStatus, setActiveStatus] = useState(stat);
  const [activeGender, setActiveGender] = useState(gender);
  const [activeSpecies, setActiveSpecies] = useState(species);

  const statuses = ["Alive", "Dead", "Unknown"];
  const genders = ["Male", "Female", "Genderless", "Unknown"];
  const speciesList = ["Human", "Alien", "Humanoid", "Mythological", "Robot", "Unknown"];

  const clearFilters = () => {
    updateStatus(""); // Status'u sıfırla
    updateGender(""); // Cinsiyeti sıfırla
    updateSpecies(""); // Türü sıfırla
    updatePageNumber(1); // Sayfayı sıfırla

    // Active durumları sıfırla
    setActiveStatus("");
    setActiveGender("");
    setActiveSpecies("");
  };

  const handleStatusChange = (status) => {
    if (activeStatus === status) {
      updateStatus("");
      setActiveStatus("");
    } else {
      updateStatus(status);
      setActiveStatus(status);
    }
    updatePageNumber(1);
  };

  const handleGenderChange = (gender) => {
    if (activeGender === gender) {
      updateGender("");
      setActiveGender("");
    } else {
      updateGender(gender);
      setActiveGender(gender);
    }
    updatePageNumber(1);
  };

  const handleSpeciesChange = (species) => {
    if (activeSpecies === species) {
      updateSpecies("");
      setActiveSpecies("");
    } else {
      updateSpecies(species);
      setActiveSpecies(species);
    }
    updatePageNumber(1);
  };

  return (
    <div className="filter-container">
      <div className="filter">
        {/* Clear Filters Butonu */}
        <div
          onClick={clearFilters}
          className="clear-filters text-center mb-3"
        >
          Clear Filters
        </div>

        <h4>Status</h4>
        {statuses.map((status, index) => (
          <FilterButton
            key={index}
            input={status}
            task={handleStatusChange}
            updatePageNumber={updatePageNumber}
            name="status"
            index={index}
            isActive={status === activeStatus}
          />
        ))}

        <h4>Gender</h4>
        {genders.map((genderOption, index) => (
          <FilterButton
            key={index}
            input={genderOption}
            task={handleGenderChange}
            updatePageNumber={updatePageNumber}
            name="gender"
            index={index}
            isActive={genderOption === activeGender}
          />
        ))}

        <h4>Species</h4>
        {speciesList.map((speciesOption, index) => (
          <FilterButton
            key={index}
            input={speciesOption}
            task={handleSpeciesChange}
            updatePageNumber={updatePageNumber}
            name="species"
            index={index}
            isActive={speciesOption === activeSpecies}
          />
        ))}

        <h4>Results Per Page</h4>
        <select
          value={pageSize}
          onChange={(e) => updatePageSize(Number(e.target.value))}
          className="form-select mt-2"
        >
          {[5,10,15,20].map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
