import NavBar from "@/ui/dashboard/navbar";
import SideBar from "@/ui/dashboard/sidebar";
import styles from "@/ui/dashboard/dashboard.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
