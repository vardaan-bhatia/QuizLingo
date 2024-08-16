import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  { name: "Japanese", code: "ja" },
  { name: "Hindi", code: "hi" },
  { name: "French", code: "fr" },
  { name: "Spanish", code: "es" },
];

const Home = () => {
  const navigate = useNavigate();
  const handleLanguage = (code: string): void => {
    navigate(`/learn?language=${code}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Welcome! Dive into your learning experience.
      </Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"1rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {languages.map((language) => (
          <Button
            key={language.code}
            onClick={() => handleLanguage(language.code)}
            variant="contained"
          >
            {language.name}
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
