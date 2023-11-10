import React from "react";
import { default as MuiDrawer } from "@mui/material/Drawer";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export interface drawerItem {
  text: string;
  icon?: React.ReactNode;
  href?: string;
}

interface DrawerProps {
  open: boolean;
  drawerItems: drawerItem[];
  onClose: (toggle: boolean) => void;
}

const Drawer = ({ open, drawerItems, onClose }: DrawerProps) => {
  const router = useRouter();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      onClose(!open);
    };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => router.push(`${item.href}`)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <MuiDrawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {list}
    </MuiDrawer>
  );
};

export default Drawer;
