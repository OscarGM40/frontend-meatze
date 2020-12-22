import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";


const Loading = () => {
  return (
    <>
      <Grid container direction="row" justify="center" style={{marginTop:60}}>
        <Typography variant="h6">Loading...</Typography>
      </Grid>
      <Grid container direction="row" justify="center" style={{marginTop:20}}>
        <CircularProgress className="animate__animated animate__flash" />
      </Grid>
    </>
  );
};

export default Loading;
