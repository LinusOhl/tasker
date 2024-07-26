import { Button } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import classes from "../styles/Demo.module.css";

const Index = () => {
  return (
    <div className={classes.bg}>
      <p>test</p>

      <Button
        size="lg"
        variant="gradient"
        gradient={{ from: "#52525B", to: "#3F3F46", deg: 60 }}
        classNames={{ root: classes.root, label: classes.label }}
      >
        Click me!
      </Button>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
