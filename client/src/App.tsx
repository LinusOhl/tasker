import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { type AuthContextType, AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { routeTree } from "./routeTree.gen";

const MainApp = ({ auth }: { auth: AuthContextType }) => {
  const router = createRouter({
    routeTree,
    context: {
      auth,
    },
  });

  return (
    <>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

const AuthWrapper = () => {
  const auth = useAuth();

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  return <MainApp auth={auth} />;
};

export const App = () => {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
};
