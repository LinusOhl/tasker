import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <h1>tasker</h1>
    </Layout>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
