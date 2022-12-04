import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-sm container p-4">
        <div className="container-fluid">
          
          <Link className='logo' to="/">LOGO</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page"><Link to="/">Domov</Link></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
