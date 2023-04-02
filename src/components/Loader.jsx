import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "20px",
        boxShadow: "0px 7px 20px 0px rgba(100, 100, 111, 0.2)",
      }}
    >
      <Box sx={{ width: "100%", mr: 2, padding: "20px" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
}
