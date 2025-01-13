import React from 'react'

export default function About() {
  return (
    <div className="home d-flex flex-column justify-content-center align-items-center text-white">

    <h2>About Component</h2>
    <div className="d-flex align-items-center justify-content-center mb-3">
      <span className="line me-3 bg-light"></span>
      <i className="bi bi-star-fill"></i>
      <span className="line ms-3 bg-light"></span>
    </div>
    <div className="bottomAbout d-flex flex-row">
    <h5 className='me-4'>Freelancer is a free bootstrap theme created by Route.
       The download includes the complete source files including HTML,
      CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h5>
      <h5>Freelancer is a free bootstrap theme created by Route.
         The download includes the complete source files including
          HTML, CSS, and JavaScript as well as optional SASS stylesheets
          for easy customization.</h5>
    </div>
  </div>
    )
}
