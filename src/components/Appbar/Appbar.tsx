"use client";

import { useState } from "react";
import styles from "./Appbar.module.css";
import { Box, Stack, IconButton, Typography } from "@mui/material";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Drawer from "../Drawer/Drawer";
import DrawerItemProps from "@/interfaces/drawerItem";
import Button from "../Button/Button";
import ButtonProps from "@/interfaces/button";
import logo from "@/assets/logo.png";
import navbarButtonsData from "@/data/navbar-buttons/navbarButtons";
import "@fontsource-variable/lexend-deca";
import { Lexend_Deca } from "next/font/google";
import { usePathname } from "next/navigation";

const lexaDeca = Lexend_Deca({
  weight: "800",
  subsets: ["latin"],
});

const navButtons: ButtonProps[] = navbarButtonsData.map((data) => ({
  children: data.children,
  variant: data.variant,
  href: data.href,
}));

const drawerItems: DrawerItemProps[] = navbarButtonsData.map((data) => ({
  text: data.children,
  icon: data.startIcon,
  href: data.href,
}));

const Appbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classNames = cx(styles["content-wrapper"], styles.appbar);
  return (
    <Box className={classNames}>
      <Link href={"/"}>
        <Stack
          direction={"row"}
          className={styles.logo}
          alignItems={"center"}
          spacing={1}
        >
          <Image src={logo} alt="logo" className={styles.logo} />
          <Typography className={cx(styles.title, lexaDeca)}>
            WMC Berlin
          </Typography>
        </Stack>
      </Link>

      <Stack
        spacing={1}
        alignItems={"center"}
        direction={"row"}
        className={styles["nav-btns"]}
      >
        {pathname !== "/" ? <Button href="/">Home</Button> : null}
        {navButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            href={button.href}
            startIcon={button.startIcon}
          >
            {button.children}
          </Button>
        ))}
      </Stack>
      <IconButton className={styles["menu-btn"]} onClick={handleClick}>
        {!open ? <MenuIcon /> : <MenuOpenIcon />}
      </IconButton>
      <Drawer open={open} onClose={handleClose} drawerItems={drawerItems} />
    </Box>
  );
};

export default Appbar;
