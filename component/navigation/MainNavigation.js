import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  Menu,
  MenuItem
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBagOutlined";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import WishlistIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";


function MainNavigation({ children }) {
  const [anchorElForMenu, setAnchorElForMenu] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorElForMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElForMenu(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#fff5cc" }}>
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              style={{ color: "black" }}
            >
              <Link href="/">Style Story</Link>
            </Typography>

            <Button
              style={{ marginLeft: "1em", color: "black" }}
              onClick={(event) => handleMenuClick(event)}
            >
              MEN
            </Button>
            <Button style={{ marginLeft: "1em", color: "black" }}>WOMEN</Button>
            <Button style={{ marginLeft: "1em", color: "black" }}>KIDS</Button>
            <Button style={{ marginLeft: "1em", color: "black" }}>HOME</Button>
            <Button style={{ marginLeft: "1em", color: "black" }}>
              MY STYLE STORY
            </Button>
            <Menu
              tabIndex={0}
              anchorEl={anchorElForMenu}
              keepMounted
              open={Boolean(anchorElForMenu)}
              onClose={handleMenuClose}
              arrow
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              elevation={0}
              getContentAnchorEl={null}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem key="1" option="1">1</MenuItem>
              <MenuItem key="2" option="2">2</MenuItem>
              <MenuItem key="3" option="3">3</MenuItem>
              <MenuItem key="4" option="4">4</MenuItem>
            </Menu>
            <Box sx={{ flexGrow: 1 }} />
            <TextField
              id="outlined-search"
              placeholder="Search"
              variant="outlined"
              style={{ width: "30%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            >
              {" "}
            </TextField>
            <Box sx={{ display: "flex" }}>
              <IconButton size="large" aria-label="profile" color="primary">
                <ProfileIcon />
              </IconButton>

              <IconButton size="large" aria-label="wishlist">
                <Badge badgeContent={"17+"} color="error">
                  <WishlistIcon color="black" />
                </Badge>
              </IconButton>

              <IconButton size="large" aria-label="bag">
                <Badge badgeContent={3} color="error">
                  <ShoppingBagIcon color="black" />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
}

export default MainNavigation;
