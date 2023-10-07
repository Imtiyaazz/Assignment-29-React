import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Asgn29 = () => {
  const [train, setTrain] = useState("");
  const [data, setData] = useState([]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setTrain(e.target.value)}
          fullWidth
          variant="outlined"
          label="Type Here.."
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData([...data, train])}
          fullWidth
          variant="contained"
          style={{ height: 55 }}
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={2}>
        <img
          src="images\Engine.jpg"
          alt=""
          style={{ height: "100px", width: "200px" }}
        />
      </Grid>

      {data.map((item) => (
        <Grid item xs={item} fullWidth>
          <img src="images\Boogi.jpg" alt="" style={{ height: "100px" }} />
        </Grid>
      ))}
    </Grid>
  );
};
