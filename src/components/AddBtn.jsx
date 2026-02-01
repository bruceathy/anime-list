export default function AddBtn() {
  const handleAddToMyList = (e) => {
    alert("Added to list");
    console.log(e.target.title);
  };
  return (
    <button className="add-btn" onClick={handleAddToMyList}>
      <i className="fas fa-plus"></i>Add to My List
    </button>
  );
}
