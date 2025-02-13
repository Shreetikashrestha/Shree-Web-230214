// Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { text: "HOME", path: "/" },
    { text: "ABOUT US", path: "/about" },
    { text: "PRICE", path: "/price" },
    { text: "GALLERY", path: "/gallery" },
    { text: "REGISTER", path: "/register" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", mt: 2 }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1739359892/logo_psez6h.jpg"
            alt="Logo"
            style={{
              height: 60,
              width: 120,
              borderRadius: 30,
              marginRight: 20,
            }}
          />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                "& .MuiDrawer-paper": {
                  width: 240,
                  background: "linear-gradient(to right, #2c3e50, #fd746c)",
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ "&:hover": { color: "#f8a5c2" } }}
              >
                {item.text}
              </Button>
            ))}
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                bgcolor: "#f8a5c2",
                color: "#2c3e50",
                "&:hover": { bgcolor: "#f8a5c2cc" },
              }}
            >
              LOGIN
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                bgcolor: "#f8a5c2",
                color: "#2c3e50",
                "&:hover": { bgcolor: "#f8a5c2cc" },
              }}
            >
              CONTACT US
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
