import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor: '#263238'}}>
      <img src="https://res.cloudinary.com/manoylo/image/upload/v1600909081/LOGO_fkj6dr.png" className="navbar-brand" width="180" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
