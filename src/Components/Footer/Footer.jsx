import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="mt-auto">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-3 text-center">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="col-md-4 mb-3 text-center">
        <h3>Follow Us</h3>
        <ul className="list-inline social-icons p-3">
          <li className="list-inline-item "><a href="#" className="text-white"><i className="bi bi-facebook"></i></a></li>
          <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
          <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-instagram"></i></a></li>
        </ul>
      </div>
      <div className="col-md-4 mb-3 text-center">
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Kyka</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p>&copy; 2023 Kyka</p>
      </div>
    </div>
  </div>
</footer>
    
    </>
  )
}
