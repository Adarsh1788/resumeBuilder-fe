import React from "react";
import { IoMdMenu } from "react-icons/io";
import AppBar from "@mui/material/AppBar"; // nav bar
import Box from "@mui/material/Box"; //div property
import Toolbar from "@mui/material/Toolbar"; //to contain icons
import Typography from "@mui/material/Typography"; // if we need to provide any typed content we use
// typography and provide the tag name
import Button from "@mui/material/Button"; // type of material ui
import Tooltip from "@mui/material/Tooltip"; // to show the content in about us
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Box  sx={{ flexGrow: 1}}>
      {" "}
      {/*sx means style property */}
      <AppBar position="static">
        <Toolbar>
          <IoMdMenu />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 4 }}>
            Resume Builder
          </Typography>
          <Tooltip
            title="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
            placement="bottom-start"
          >
            <Button color="inherit">About Us</Button>
          </Tooltip>
          <Link style={{color:"white"}} to={"/history"}>
            {" "}
            <Button color="inherit" variant="outlined"> History</Button>{" "}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
