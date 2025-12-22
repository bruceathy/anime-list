import AddBtn from "./AddBtn";
// A POPUP WITH MORE INFO ABOUT THE SERIES SHOULD APPEAR WHEN CLICKING ON THE SERIES TITLE

export default function PopCard({ title, picture_url }) {
  function showMore() {
    alert(`This is ${title}`);
  }

  return (
    <div className="card" style={{ backgroundImage: `url(${picture_url})` }}>
      <div className="info">
        <h3>
          <a onClick={showMore}>{title}</a>
        </h3>
        <AddBtn />
      </div>
    </div>
  );
}
