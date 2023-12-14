import NavBar from "@/ui/dashboard/navbar";
import SideBar from "@/ui/dashboard/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
