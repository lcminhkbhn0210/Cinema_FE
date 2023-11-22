import "./navListItem.css";

function NavListItem(props) {
  return (
    <li>
      <a href={props.nav.link}>{props.nav.name}</a>
    </li>
  );
}

export default NavListItem;
