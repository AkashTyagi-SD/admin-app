"use client";

import { FC } from "react";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { MenuList } from "@/models/dashboard-model";
import { usePathname } from "next/navigation";

type Props = {
  item: MenuList;
  key: string;
};

const MenuLink: FC<Props> = ({ item }) => {
  const { title, path, icon } = item;
  const pathname = usePathname();
  return (
    <Link
      href={`${path}`}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
