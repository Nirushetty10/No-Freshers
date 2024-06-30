import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Practice from '../video/Practice (1).mp4'

export default function Home() {
  return (
    <Container id="home">
      <Grid container spacing={6} sx={{ mt: 8 }}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Welcome to No Freshers
            </Typography>
            <Typography variant="body1" color="text.secondary">
              At No Freshers, We believe in providing students with more than
              just theoretical knowledge. We offer hands-on, real-world
              experience through our unique program designed to bridge the gap
              between education and industry expectations.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: { sm: "flex" }, width: "100%" }}
        >
          <Box
            sx={{
              m: "auto",
              height: "400",
              width: "100%",
            }}
          >
            {/* <img src="https://img.freepik.com/free-photo/low-angle-shot-speaker-talking-looking-colleagues_74855-4326.jpg" alt="" style={{width : "100%", height : "100%", objectFit : "cover"}}/> */}

            <video width="100%" controls>
              <source src={Practice} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
