const FilterButton = ({ input, task, updatePageNumber, name, index, isActive }) => {
  return (
    <button 
      onClick={() => {
        task(input); // Butona tıklanınca filtreyi güncelle
        updatePageNumber(1); // Sayfayı sıfırla
      }}
      className={`btn btn-outline-primary filter-button w-100 mb-2 ${isActive ? "active" : ""}`} // Aktifse stil ekle
    >
      {input}
    </button>
  );
};

export default FilterButton;
