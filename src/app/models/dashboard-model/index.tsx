import { ReactNode } from "react";

export interface MenuList {
  title: string;
  path: string;
  icon: ReactNode;
}

export interface MenuItemType {
  title: string;
  lists: MenuList[];
}
