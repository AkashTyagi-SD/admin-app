import { MenuItemType, MenuList } from "@/models/dashboard-model";
import styles from "./sidebar.module.css";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    lists: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    lists: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Users",
    lists: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/default-avatar.jpg"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>Akash Tyagi</span>
          <span className={styles.userTitle}>Software Developer</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat: MenuItemType) => {
          return (
            <li key={cat.title}>
              <span className={styles.categories}>{cat.title}</span>
              {cat.lists.map((item: MenuList) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
