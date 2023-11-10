import Header from "../Layouts/Header";
import ContentAdmin from "./ContentAdmin";
import NavBarAdmin from "./NavBarAdmin";

function Admin() {
  return (
    <div className="bg-slate-300 relative">
      <Header />
      <NavBarAdmin />
      <ContentAdmin />
    </div>
  );
}

export default Admin;
