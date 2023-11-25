import "./footerNavItem.css";
function FooterNavItem(props) {
  return (
    <li>
      <ion-icon name="chevrom-forward-outline"></ion-icon>{" "}
      <a href="/user">{props.name}</a>
    </li>
  );
}

export default FooterNavItem;
