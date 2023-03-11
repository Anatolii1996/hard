import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
     <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt="Logo"
           
            className="d-inline-block align-text-top"
          />
         
        </a>
      </div>
    </nav>
    <Outlet/>
    </>
   
  );
};
export default Header;
