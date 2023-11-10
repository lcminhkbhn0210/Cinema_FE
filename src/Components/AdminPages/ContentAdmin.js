import { Outlet } from "react-router";
import styles from "./ContentAdmin.module.css";

function ContentAdmin() {
  return (
    <>
      <div className={`absolute ${styles.container}`}>
        <Outlet />
      </div>
    </>
  );
}

export default ContentAdmin;
