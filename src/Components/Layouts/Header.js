import cinema_logo from "../Assets/cinema-logo.png";
import user_logo from "../Assets/Logo-User.JPG";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [stateDropMenuUser, setStateDropMenuUser] = useState(false);

  const handleOnclickDropMenuUser = (e) => {
    if (stateDropMenuUser === false) {
      setStateDropMenuUser(true);
    } else setStateDropMenuUser(false);
  };

  return (
    <div className="grid grid-cols-12 fixed top-1 w-full z-50 ">
      <div className="col-span-2 bg-gray_black items-center p-4 flex rounded-e-lg  shadow-sm shadow-black justify-between">
        <img src={cinema_logo} alt="Logo" className="block w-12 h-12 " />
        <h1 className="text-3xl text-white">Cinema</h1>
        <i className="ti ti-align-right ti-10x text-3xl text-white cursor-pointer"></i>
      </div>
      <div className="col-span-10 flex px-10 py-4 border border-solid justify-between bg-white shadow-sm shadow-grey rounded-3xl">
        <div className="h-full flex items-center ">
          <div className="rounded-md flex items-center bg-grey">
            <input
              className="px-6 rounded-md bg-grey outline-none "
              placeholder="Search here"
            />
            <span className="py-2 px-3 rounded-s-md cursor-pointer ">
              <i className="ti-search"></i>
            </span>
          </div>
        </div>

        <ul className="flex items-center mr-12 flex-row-reverse h-full relative">
          <li className="flex border-l-2 pl-5 flex-col">
            <div className="flex ">
              <img
                onClick={handleOnclickDropMenuUser}
                src={user_logo}
                alt="logo user"
                className="block w-12 h-12 rounded-full border object-fill cursor-pointer"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg">Minh</h3>
                <p className="font-thin text-sm">Super Admin</p>
              </div>
            </div>
            <ul
              className={`absolute text-md py-4 shadow-lg  z-10 bg-white w-1/2 left-48 rounded-xl   ${
                styles.top__41
              } ${stateDropMenuUser ? "" : "hidden"}`}
            >
              <li className="py-2 px-6 cursor-pointer hover:bg-grey">
                <i className="ti ti-user mr-2 text-orange-500"></i>Profile
              </li>
              <li className="py-2 px-6 cursor-pointer hover:bg-grey">
                <i className="ti ti-settings mr-2 text-green-500"></i>Settings
              </li>
              <li className="py-2 px-6 cursor-pointer hover:bg-grey">
                <i className="ti ti-shift-right mr-2"></i>Logout
              </li>
            </ul>
          </li>

          <li className="pr-6 cursor-pointer ">
            <i className="ti ti-email text-2xl p-2 hover:bg-blue-400 hover:rounded-lg transition ease-out duration-1000 "></i>
          </li>
          <li className="pr-6 cursor-pointer">
            <i className="ti ti-bell text-2xl p-2 hover:bg-blue-400 hover:rounded-lg transition ease-out duration-1000"></i>
          </li>
          <li className="pr-6 cursor-pointer">
            <i className="ti ti-github text-2xl p-2 hover:bg-blue-400 hover:rounded-lg transition ease-out duration-1000 "></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
