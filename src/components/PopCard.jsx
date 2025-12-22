import { useState } from "react";
import AddBtn from "./AddBtn";
// A POPUP WITH MORE INFO ABOUT THE SERIES SHOULD APPEAR WHEN CLICKING ON THE SERIES TITLE

export default function PopCard({ title, picture_url }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function showMore() {
    // alert(`This is ${title}`);
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="card" style={{ backgroundImage: `url(${picture_url})` }}>
      <div className="info">
        <h3>
          <a onClick={showMore}>{title}</a>
        </h3>
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <p>{title}</p>
              <button onClick={closePopup}>X</button>
            </div>
          </div>
        )}
        <AddBtn />
      </div>
    </div>
  );
}
