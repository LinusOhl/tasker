import { Box, Button, Card, Flex, TextInput } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "../components/molecule/Navbar";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Error signing in:", error);
      return;
    }

    setEmail("");
    setPassword("");

    navigate({ to: "/home" });
  };

  return (
    <>
      <Navbar location="Sign in" goBack={() => navigate({ to: "/" })} />

      <Box p={"sm"}>
        <Card shadow="sm" withBorder>
          <Flex direction={"column"} gap={"md"} mb={"lg"}>
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Flex>

          <Button onClick={handleSubmit}>Sign in</Button>
        </Card>
      </Box>
    </>
  );
};

export const Route = createFileRoute("/signin")({
  component: SignIn,
});
