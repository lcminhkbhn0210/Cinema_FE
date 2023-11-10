import styles from "./NavBarAdmin.module.css";
import user_img from "../Assets/Logo-User.JPG";
import NavBarAdminItem from "./NavBarAdminItem";
import film_logo from "../Assets/cinema-logo.png";
import product_logo from "../Assets/product_logo.png";
import showtimes_logo from "../Assets/showtime_logo.png";
import user_logo from "../Assets/user_manager_logo.png";
import voucher_logo from "../Assets/voucher_logo.png";
import bill_logo from "../Assets/bill_logo.png";

const itemMenu = [
  {
    title: "Film",
    icon: film_logo,
  },
  {
    title: "Product",
    icon: product_logo,
  },
  {
    title: "ShowTimes",
    icon: showtimes_logo,
  },
  {
    title: "User",
    icon: user_logo,
  },
  {
    title: "Vouchers",
    icon: voucher_logo,
  },
  {
    title: "Bill",
    icon: bill_logo,
  },
];

function NavBarAdmin() {
  return (
    <nav className={`${styles.nav} fixed rounded-lg shadow-lg`}>
      <div className="h-full">
        <div className="flex flex-col items-center py-5">
          <div className="h-16 w-16 mb-3 relative">
            <img
              src={user_img}
              alt="user"
              className="h-full w-full rounded-xl"
            />
            <i
              className={`ti ti-settings absolute ${styles.icon__profile}`}
            ></i>
          </div>

          <h5 className="text-xl font-semibold">
            Hello,<strong> Minh</strong>
          </h5>
          <p className="text-xs opacity-60 italic">lcminhthpt2000@gmail.com</p>
        </div>
        <ul>
          <li className="p-4 uppercase text-sm text-gray-400 mx-6">
            Main Menu Manager
          </li>
          {itemMenu.map((el) => {
            return <NavBarAdminItem item={el} key={el.title} />;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBarAdmin;
