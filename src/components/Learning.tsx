import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const searchParams = useSearchParams()[0];
  const languageParams = searchParams.get("language");
  // const language: Langtype | undefined = languageParams as Langtype;

  const navigate = useNavigate();
  const handlecount = () => {
    setCount((p) => p + 1);
  };
  return (
    <Container maxWidth={"sm"} sx={{ p: "1rem" }}>
      <Button
        onClick={
          count == 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)
        }
      >
        <ArrowBack />
      </Button>
      <Typography m={"2rem 0"}>Your Path to Easy Learning</Typography>
      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant={"h5"}>
          {count + 1}- {"Sample"}
        </Typography>
        <Typography color={"blue"} variant="h5">
          : {"LOL"}
        </Typography>
        <Button sx={{ borderRadius: "50%" }}>
          <VolumeUp />
        </Button>
      </Stack>{" "}
      <Button
        variant="contained"
        fullWidth
        sx={{ margin: "1.5rem 0" }}
        onClick={count === 9 ? () => navigate("/quiz") : handlecount}
      >
        {count === 9 ? "Test" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
