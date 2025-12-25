export default function AddBtn() {
  const handleAddToMyList = () => {
    alert("Added to list");
  };
  return (
    <button className="add-btn" onClick={handleAddToMyList}>
      <i className="fas fa-plus"></i>Add to My List
    </button>
  );
}
