import { Link } from "react-router-dom";

export default function HeaderApp() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/book-list" className="nav-link">
                Book List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book-view" className="nav-link">
                Book VIEW
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book-add" className="nav-link">
                BOOK ADD
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book-edit" className="nav-link">
                BOOK EDIT
              </Link>
            </li>
           
            
          </ul>
        </div>
      </nav>
      <div>
        <h2>
          BOOK SERVICE
        </h2>
      </div>
    </>
  );
}
