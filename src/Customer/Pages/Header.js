import { useNavigate } from "react-router";
import Button from "../Components/Button";
import NavListItem from "../Components/NavListItem";
import Search from "../Components/Search";
import navListData from "../Data/navListData";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const handleSignOutOnClick = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <a href="/user" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => {
          return <NavListItem key={nav._id} nav={nav} />;
        })}
      </ul>
      <Search />
      <div onClick={handleSignOutOnClick}>
        <Button
          icon={<ion-icon name="log-in-outline"></ion-icon>}
          name="Sign out"
        />
      </div>
    </header>
  );
}

export default Header;
