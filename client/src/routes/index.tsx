import { Button, Title, useMantineColorScheme } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import classes from "./Index.module.scss";

const Index = () => {
  const navigate = useNavigate();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  const onLogIn = () => {
    navigate({ to: "/home" });
  };

  const onSignUp = () => {
    console.log("sign up");
    navigate({ to: "/signup" });
  };

  return (
    <div className={classes.container}>
      <Title order={1}>Tasker</Title>

      <Button onClick={toggleColorScheme}>Toggle theme</Button>

      <Button size="lg" variant="filled" onClick={onLogIn} fullWidth>
        Log in
      </Button>

      <Button size="lg" variant="outline" onClick={onSignUp} fullWidth>
        Sign up
      </Button>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
