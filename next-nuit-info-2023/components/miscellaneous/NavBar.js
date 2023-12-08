import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Accueil", "Apprentissage", "MiniJeux", "Thème"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2c3e50" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
          }}>
          Action Climat
        </Typography>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                {page}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, index) => (
            <Button key={page} sx={{ mx: 2, color: "white" }}>
              {page}
            </Button>
          ))}
        </Box>

        <AdbIcon sx={{ display: { xs: "flex", md: "none" } }} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
