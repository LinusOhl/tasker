import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { routeTree } from "./routeTree.gen";

export const App = () => {
  const auth = useAuth();

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  const router = createRouter({
    routeTree,
    context: {
      auth,
    },
  });

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </AuthProvider>
  );
};
