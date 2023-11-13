import styles from "./Pricing.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import cx from "classnames";
import PricingData from "@/data/pricing/pricing";
import PricingCard from "@/components/PricingCard/PricingCard";

const Pricing = () => {
  return (
    <Box id={"join"} className={cx(styles["pricing-section"])}>
      <Box className={"content-wrapper"}>
        <Typography className={styles.title}>Join us</Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{width: "100%"}}
        >
          {PricingData.map((data) => (
            <PricingCard
              icon={data.icon}
              title={data.title}
              price={data.price}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Pricing;
