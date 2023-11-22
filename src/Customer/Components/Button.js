import "./button.css";

function Button(props) {
  return (
    <a
      href="/"
      className="mainBtn"
      style={{ color: props?.color, background: props?.bgColor }}
    >
      {props.icon} {props.name}
    </a>
  );
}

export default Button;
