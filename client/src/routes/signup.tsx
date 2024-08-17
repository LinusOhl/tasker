import { Button, TextInput } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCreateUser } from "../hooks/useCreateUser";

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const createUserMutation = useCreateUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = await signUp(email, password);

      if (!user) {
        console.error("Error signing up");
        return;
      }

      createUserMutation.mutate({ id: user.id, email: user.email ?? "" });
    } catch (error) {
      console.error("Error signing up:", error);
      return;
    }

    setEmail("");
    setPassword("");

    navigate({ to: "/home" });
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <TextInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <Button type="submit" onClick={handleSubmit}>
        Sign up
      </Button>
    </div>
  );
};

export const Route = createFileRoute("/signup")({
  component: SignUp,
});
