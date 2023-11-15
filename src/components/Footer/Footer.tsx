import { Box, Stack, Typography } from "@mui/material";
import styles from "./Footer.module.css"
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box className={styles["footer-container"]}>
      <Stack direction={"row"}>
        <Typography className={styles.text}>WMC Berlin •</Typography>
        <EmailIcon className={styles.icon} />
        <Typography className={styles.text}>worldmalayaleecouncil.berlin@gmail.com</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
