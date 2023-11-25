import "./button.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="mainBtn"
      style={{ color: props?.color, background: props?.bgColor }}
    >
      {props.icon} {props.name}
    </button>
  );
}

export default Button;
