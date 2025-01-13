import React from "react";

export default function Home() {
  return (
    <div className="home d-flex flex-column justify-content-center align-items-center text-white">
      <div>
        <img
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
          alt="Avatar"
        />
      </div>
      <h2>Start Framework</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <span className="line me-3 bg-light"></span>
        <i className="bi bi-star-fill"></i>
        <span className="line ms-3 bg-light"></span>
      </div>
      <h5>Graphic Artist - Web Designer - Illustrator</h5>
    </div>
  );
}
