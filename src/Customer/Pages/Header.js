import Button from "../Components/Button";
import NavListItem from "../Components/NavListItem";
import Search from "../Components/Search";
import navListData from "../Data/navListData";
import "./header.css";

function Header() {
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
      <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign in"
      />
    </header>
  );
}

export default Header;
