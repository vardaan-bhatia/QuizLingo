import {
  AppBar,
  Typography,
  Toolbar,
  Switch,
  Box,
  Button,
} from "@mui/material";
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
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <Link to="/login" style={style}>
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
          </Link>
          <Button aria-label="Toggle dark mode" color="secondary">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
