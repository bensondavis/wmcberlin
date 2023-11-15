import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function NotFound() {
  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ width: "fit-content", height: "30px", m: "auto" }}
        >
          <h2>404</h2>
          <Divider orientation="vertical" />
          <h2>Not Found</h2>
        </Stack>
        <Stack
          direction={"column"}
          sx={{ width: "max-content", m: "auto", textAlign: "center", mt: 2 }}
        >
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </Stack>
      </Box>
    </Box>
  );
}
