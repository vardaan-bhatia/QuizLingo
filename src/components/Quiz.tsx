import { Padding } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);
  const [ans, setAns] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const navigate = useNavigate();

  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  };
  return (
    <Container maxWidth={"sm"}>
      <Typography m={"2rem 0"}>Quiz</Typography>

      <Typography variant="h3">
        {count + 1}-{"Random"}
      </Typography>
      <FormControl>
        <FormLabel sx={{ marginTop: "1rem" }} color="primary">
          Meaning
        </FormLabel>
        <RadioGroup onChange={(e) => setAns(e.target.value)} value={ans}>
          <FormControlLabel
            value={"ol"}
            control={<Radio />}
            label={"option 1"}
            sx={{ padding: "1rem" }}
          />
        </RadioGroup>
      </FormControl>
      <Button
        onClick={count === 9 ? () => navigate("/result") : () => nextHandler()}
        fullWidth
        variant="contained"
        disabled={ans === ""}
      >
        {count === 9 ? "Submit" : "Next"}
      </Button>
    </Container>
  );
};

export default Quiz;
