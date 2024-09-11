import { Button, Title } from "@mantine/core";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { TaskCreationModal } from "../components/organisms/TaskCreationModal/TaskCreationModal";
import { TasksTabsNavigation } from "../features/Tasks/components/TasksTabsNavigation";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user: userFromHook, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <div>
      <Title order={1}>Hiya, {userFromHook?.email}</Title>

      <Button onClick={handleSignOut}>Sign out</Button>

      <TasksTabsNavigation />

      <TaskCreationModal />
    </div>
  );
};

export const Route = createFileRoute("/home")({
  beforeLoad: ({ context }) => {
    if (!context.auth.user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: Home,
});
