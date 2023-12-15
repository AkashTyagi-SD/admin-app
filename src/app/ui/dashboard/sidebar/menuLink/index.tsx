import { FC } from "react";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { MenuList } from "@/models/dashboard-model";

const MenuLink: FC<MenuList> = ({ title, path, icon }) => {
  return (
    <Link href={`${path}`} className={styles.container}>
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
