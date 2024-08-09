import { Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { TasksTabsNavigation } from "../features/Tasks/components/TasksTabsNavigation";

const Home = () => {
  return (
    <div>
      <Title order={1}>Home</Title>

      <TasksTabsNavigation />
    </div>
  );
};

export const Route = createFileRoute("/home")({
  component: Home,
});
