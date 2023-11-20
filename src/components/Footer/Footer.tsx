import { Box, Stack, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box className={styles["footer-container"]}>
      <Stack
        direction={{ md: "row", sm: "row", xs: "column" }}
        className={styles["margin-y-10"]}
      >
        <Typography className={styles.text}>WMC Berlin</Typography>
        <Typography className={styles.dot}>•</Typography>
        <Box className={styles.email}>
          <EmailIcon className={styles.icon} />
          <Typography className={styles.text}>
            worldmalayaleecouncil.berlin@gmail.com
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
