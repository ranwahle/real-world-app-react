import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import StyledApp from "./App.styled";
import * as navbar from "./components/vavbar/navbar";
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
          <navbar.Navbar></navbar.Navbar>
          <RouterProvider router={router} />
        </StyledApp>
      </QueryClientProvider>
    </GlobalThemeProvider>
  );
}

export default App;
