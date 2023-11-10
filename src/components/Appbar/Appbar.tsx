"use client";

import { useState } from "react";
import styles from "./Appbar.module.css";
import { Box, Stack, IconButton } from "@mui/material";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Drawer from "../Drawer/Drawer";
import type { drawerItem } from "../Drawer/Drawer";
import Button, { ButtonProps } from "../Button/Button";
import logo from "@/assets/logo.png";
import navbarButtonsData from "@/data/navbar-buttons/navbarButtons";

const navButtons: ButtonProps[] = navbarButtonsData.map((data) => ({
  text: data.text,
  variant: data.variant,
  href: data.href,
}));

const drawerItems: drawerItem[] = navbarButtonsData.map((data) => ({
  text: data.text,
  icon: data.startIcon,
  href: data.href,
}));

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classNames = cx(styles["content-wrapper"], styles.appbar);
  return (
    <Box
      className={classNames}
      sx={{
        p: {
          md: "40px 0px !important",
          sm: "15px 0px !important",
          xs: "15px 0px !important",
        },
      }}
    >
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            style={{
              width: "auto",
              height: "54px",
            }}
          />
        </Link>
      </div>
      <Stack sx={{ display: { xs: "none", md: "block" }, mt: 1 }}>
        {navButtons.map((button, index) => (
          <Button
            myKey={button.text}
            key={button.text + index}
            text={button.text}
            variant={button.variant}
            href={button.href}
            startIcon={button.startIcon}
            endIcon={button.endIcon}
            className={button.className}
          />
        ))}
      </Stack>
      <IconButton
        sx={{
          display: { md: "none", lg: "none", xl: "none" },
          width: 40,
          height: 40,
        }}
        onClick={handleClick}
      >
        {!open ? <MenuIcon /> : <MenuOpenIcon />}
      </IconButton>
      <Drawer open={open} onClose={handleClose} drawerItems={drawerItems} />
    </Box>
  );
};

export default Appbar;
