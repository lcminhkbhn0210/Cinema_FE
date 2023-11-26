import { Link } from "react-router-dom";

function NavBarAdminItem(props) {
  return (
    <>
      <Link to={`/admin/manager/${props.item.title?.toLowerCase()}`}>
        <li className="p-4 uppercase text-sm  mx-6 cursor-pointer hover:text-orange-400 transition duration-300 ">
          <div className="flex items-center">
            <i className="mr-4">
              <img src={props.item.icon} alt="icon" className="w-5 h-5" />
            </i>
            <h3 className="">Manager {props.item.title}</h3>
            <i className="ti ti-angle-right ml-auto"></i>
          </div>
        </li>
      </Link>
    </>
  );
}

export default NavBarAdminItem;
