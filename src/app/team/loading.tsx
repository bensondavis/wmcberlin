import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="inherit"  />
    </Box>
  );
};

export default Loading;
