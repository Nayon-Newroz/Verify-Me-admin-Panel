import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Container,
  Grid,
  IconButton,
  Paper,
  useTheme,
} from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const Fonts = () => {
  const theme = useTheme();
  return (
    <Container>
      <Paper severity="" color="info" sx={{ fontSize: "20px" }}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={1}>
            {" "}
            <Typography
              variant="h2"
              color="text.main"
              sx={{ borderRight: `3px solid ${theme.palette.border.main}` }}
            >
              H1
            </Typography>
          </Grid>
          <Grid item xs={11} sx={{ position: "relative" }}>
            <IconButton
              sx={{
                position: "absolute",
                right: 0,
                border: `1px solid ${theme.palette.border.main}`,
              }}
            >
              <ContentCopyRoundedIcon />
              {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.6666 7.33334V11.3333C14.6666 14 13.9999 14.6667 11.3333 14.6667H4.66659C1.99992 14.6667 1.33325 14 1.33325 11.3333V4.66668C1.33325 2.00001 1.99992 1.33334 4.66659 1.33334H5.66659C6.66659 1.33334 6.88659 1.62668 7.26659 2.13334L8.26659 3.46668C8.51992 3.80001 8.66659 4.00001 9.33325 4.00001H11.3333C13.9999 4.00001 14.6666 4.66668 14.6666 7.33334Z"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M5.33325 1.33334H11.3333C12.6666 1.33334 13.3333 2.00001 13.3333 3.33334V4.25334"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
            </IconButton>
            <Typography variant="h6" color="text.main" sx={{ mt: 1 }}>
              font size : 48px , line-height : 58px,font-weight : 400
            </Typography>
            &lt;Typography variant="h1" color="text.main" &gt;
            &lt;/Typography&gt;
          </Grid>
        </Grid>
      </Paper>
      <br />
      <br />
      <Paper>
        <Typography Variant="h1" color="text.main"></Typography>

        <Typography variant="h1" color="text.main" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="base" gutterBottom>
          base. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="medium" gutterBottom>
          medium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="small" gutterBottom>
          small. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="xsmall" gutterBottom>
          xsmall. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="xxsmall" display="block" gutterBottom>
          xxsmall text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text asddasd
        </Typography>
        <Typography variant="poster" display="block" gutterBottom>
          overline text poster
        </Typography>
      </Paper>
    </Container>
  );
};

export default Fonts;
