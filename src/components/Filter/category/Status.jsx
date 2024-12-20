// Status Filter Component
import FilterButton from "../FilterButton";

const Status = ({ updateStatus, updatePageNumber }) => {
  const statuses = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {statuses.map((stat, index) => (
            <FilterButton
              key={index}
              name="stat"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={stat}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;