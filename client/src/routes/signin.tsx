import { Button, TextInput } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
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
    <div>
      <h1>Sign in</h1>

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

      <Button onClick={handleSubmit}>Sign in</Button>
    </div>
  );
};

export const Route = createFileRoute("/signin")({
  component: SignIn,
});
