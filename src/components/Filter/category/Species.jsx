// Species Filter Component
import FilterButton from "../FilterButton";

const Species = ({ updateSpecies, updatePageNumber }) => {
  const speciesList = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {speciesList.map((species, index) => (
            <FilterButton
              key={index}
              name="species"
              task={updateSpecies}
              updatePageNumber={updatePageNumber}
              input={species}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;