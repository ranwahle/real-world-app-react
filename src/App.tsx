import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import StyledApp from "./App.styled";
import { Navbar } from "./components/vavbar/navbar";
import { Home } from "./pages/home/home";
import { GlobalThemeProvider } from "./providers/globalThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <GlobalThemeProvider>
      <StyledApp>
        <Navbar></Navbar>
        <RouterProvider router={router} />
      </StyledApp>
    </GlobalThemeProvider>
  );
}

export default App;
