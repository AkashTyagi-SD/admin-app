"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styles from "./navbar.module.css";
import NextBreadcrumb from "@/ui/next-breadcrumb";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>{pathname}</div> */}
      <NextBreadcrumb
        homeElement={"Dashboard"}
        separator={<span> | </span>}
        activeClasses="text-amber-500"
        containerClasses="flex py-5"
        listClasses="hover:underline mx-2 font-bold"
        capitalizeLinks
      />
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
