import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.p`
  font-family: "Golos Text", sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  font-size: 45px;
`;

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Logo>Q</Logo>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
