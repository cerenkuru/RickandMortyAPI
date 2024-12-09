// Gender Filter Component
import FilterButton from "../FilterButton";

const Gender = ({ updateGender, updatePageNumber, selectedGender }) => {
  const genders = ["Male", "Female", "Genderless", "Unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((gender, index) => (
            <FilterButton
              key={index}
              name="gender"
              task={updateGender}
              updatePageNumber={updatePageNumber}
              input={gender}
              selectedValue={selectedGender} // Current selection
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;