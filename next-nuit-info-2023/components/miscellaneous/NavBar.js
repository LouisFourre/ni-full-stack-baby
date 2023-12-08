import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from '@mui/material/styles';

const pages = ["Apprentissage", "MiniJeux"];

function ResponsiveAppBar({setTheme}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.green.main,
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1)",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                color: "#008140",
              },
              transition: "color 0.3s ease",
            }}>
            Action Climat
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      "&:hover": {
                        color: "#008140",
                      },
                      transition: "color 0.3s ease",
                    }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "flex-end",
            }}>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                "&:hover": {
                  color: "#008140",
                },
                transition: "color 0.3s ease",
              }}>
              LOGO
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <a
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: index < pages.length - 1 ? 2 : 0, // Ajustez l'espace entre les pages ici
                      color: "white",
                      display: "block",
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor: "#008140",
                      },
                      transition: "background-color 0.3s ease",
                    }}>
                    {page}
                  </Button>
                </a>
              ))}
            </Box>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                mr: 2,
                color: "inherit",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              THÈMES
            </Button>
          </Box>
          <Menu
            id="basic-menu"
            open={open}
            onClose={() => handleClose()}
            anchorEl={anchorEl}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => setTheme('light')}>Clair</MenuItem>
            <MenuItem onClick={() => setTheme('dark')}>Sombre</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;