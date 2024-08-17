import { AppBar, Typography, Toolbar, Switch, Box } from "@mui/material";
import { Link } from "react-router-dom";

const style = { margin: "0.5rem", color: "white", textDecoration: "none" };

const Header = () => {
  return (
    <AppBar position="static" sx={{ height: "56px" }}>
      <Toolbar sx={{ height: "56px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" style={style}>
            <Typography variant="h5">QuizLingo</Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={style}>
            Home
          </Link>
          <Link to="/login" style={style}>
            Login
          </Link>
          <Switch aria-label="Toggle dark mode" color="secondary" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
