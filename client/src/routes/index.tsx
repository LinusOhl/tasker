import { Box, Button, Container, Flex, Text, Title } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

const Index = () => {
  const navigate = useNavigate();

  const onLogIn = () => {
    navigate({ to: "/signin" });
  };

  const onSignUp = () => {
    console.log("sign up");
    navigate({ to: "/signup" });
  };

  return (
    <Container>
      <Flex direction={"column"} gap={"xl"} align={"center"}>
        <Box ta={"center"}>
          <Title order={1}>tasker</Title>
          <Text>a full-stack task management web application</Text>
        </Box>

        <Flex direction={"column"} gap={"sm"} w={"100%"}>
          <Button size="lg" variant="filled" onClick={onLogIn} fullWidth>
            Log in
          </Button>

          <Button size="lg" variant="outline" onClick={onSignUp} fullWidth>
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
