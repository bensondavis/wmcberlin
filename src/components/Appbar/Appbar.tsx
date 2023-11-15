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
import type { drawerItem } from "../Drawer/Drawer";
import Button, { ButtonProps } from "../Button/Button";
import logo from "@/assets/logo.png";
import navbarButtonsData from "@/data/navbar-buttons/navbarButtons";
import '@fontsource-variable/lexend-deca';
import { Lexend_Deca } from "next/font/google";

const lexaDeca = Lexend_Deca({
  weight: "800",
  subsets: ["latin"]
})

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
          md: "30px 0px !important",
          sm: "15px 0px !important",
          xs: "15px 0px !important",
        },
      }}
    >
      <Link href={"/"}>
        <Stack direction={"row"} className={styles.logo} alignItems={"center"} spacing={1}>
          <Image src={logo} alt="logo" className={styles.logo} />
          <Typography className={cx(styles.title, lexaDeca)}>WMC Berlin</Typography>
        </Stack>
      </Link>

      <Stack sx={{ display: { xs: "none", md: "block" }, pt: 3 }}>
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
          mr: 2,
          mt: 3,
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
