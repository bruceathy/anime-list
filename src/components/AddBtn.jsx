export default function AddBtn() {
  const handleAddToMyList = () => {
    console.log("Adding to My List");
  };
  return (
    <button className="add-btn" onClick={handleAddToMyList}>
      <i className="fas fa-plus"></i>Add to My List
    </button>
  );
}
