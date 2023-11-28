import DrawerItemProps from "./drawerItem";

interface DrawerProps {
  open: boolean;
  drawerItems: DrawerItemProps[];
  onClose: (toggle: boolean) => void;
}

export default DrawerProps;