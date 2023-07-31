import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

function GridLoading() {
  return (
    <Grid container wrap="wrap">
      {Array.from(new Array(6)).map((item, index) => (
        <Box key={index} sx={{ width: 360, marginRight: 1, my: 2, padding:2 }}>
          <Skeleton variant="rectangular" width={360} height={200} />
          <Box sx={{ pt: 1 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default GridLoading;
