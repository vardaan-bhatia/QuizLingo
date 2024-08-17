import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Home = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<{ code: string; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleLanguage = (code: string): void => {
    navigate(`/learn?language=${code}`);
  };

  const fetchLanguages = async () => {
    const options = {
      method: "GET",
      url: "https://microsoft-translator-text-api3.p.rapidapi.com/languages",
      headers: {
        "x-rapidapi-key": "2feae43139msh91d8e953f8663a7p1aa1bcjsne33d5897f08b",
        "x-rapidapi-host": "microsoft-translator-text-api3.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const languagesData = response.data.translation;

      const languagesArray = Object.keys(languagesData).map((code) => ({
        code,
        name: languagesData[code].name,
      }));

      setLang(languagesArray);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography
        p={"0.8rem"}
        variant="h3"
        textAlign={"center"}
        bgcolor={"#EFEEFC"}
        sx={{ borderRadius: "4px" }}
      >
        Welcome! Dive into your learning experience.
      </Typography>
      <Typography p={"1rem"} variant="h5" textAlign={"center"}>
        Select a Language to Begin
      </Typography>
      {error ? (
        <Typography variant="h6" color="error" textAlign="center">
          {error}
        </Typography>
      ) : loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "flex-start", // Aligns items to start from the left
            padding: "1rem",
          }}
        >
          {lang.map((language) => (
            <Button
              key={language.code}
              onClick={() => handleLanguage(language.code)}
              variant="contained"
              sx={{
                flex: "1 0 20%", // Ensures even distribution
                minWidth: "120px", // Ensures a minimum width
              }}
            >
              {language.name}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;
