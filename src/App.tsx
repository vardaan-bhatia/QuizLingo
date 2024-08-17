import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const Home = lazy(() => import("./components/Home"));
const Learning = lazy(() => import("./components/Learning"));
const Login = lazy(() => import("./components/Login"));
const Quiz = lazy(() => import("./components/Quiz"));
const Result = lazy(() => import("./components/Result"));

const App = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "92vh" }}>
        <Suspense fallback={<Loader />}>
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learning />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
        </Suspense>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
