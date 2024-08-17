import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  backgroundColor: "#6A5AE0",
  color: "#fff",
  padding: "1rem 0",
  textAlign: "center",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack spacing={1}>
          <Typography variant="body1" component="p">
            © {new Date().getFullYear()} QuizLingo. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p">
            Made wth Love ❤️ by @Vardaan Bhatia
          </Typography>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
