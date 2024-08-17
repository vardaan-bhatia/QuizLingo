import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleLanguage = (code: string): void => {
    navigate(`/learn?language=${code}`);
  };

  const [lang, setLang] = useState<{ code: string; name: string }[]>([]);

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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography p={"0.8rem"} variant="h3" textAlign={"center"}>
        Welcome! Dive into your learning experience.
      </Typography>
      <Typography p={"1rem"} variant="h5" textAlign={"center"}>
        Select a Language to Begin
      </Typography>
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
    </Box>
  );
};

export default Home;
