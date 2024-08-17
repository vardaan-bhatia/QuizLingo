import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./components/Redux/store.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A5AE0",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
