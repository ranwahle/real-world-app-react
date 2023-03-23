import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StyledApp from "./App.styled";
import Navbar from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
import { GlobalThemeProvider } from "./providers/globalThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <GlobalThemeProvider>
      <QueryClientProvider client={queryClient}>
        <StyledApp>
          <Navbar />
          <RouterProvider router={router} />
        </StyledApp>
      </QueryClientProvider>
    </GlobalThemeProvider>
  );
}

export default App;
