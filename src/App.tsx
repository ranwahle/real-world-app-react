import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import StyledApp from './App.styled'
import { Navbar } from './components/vavbar/navbar'
import { Home } from './pages/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);


function App() {
  return <StyledApp>
    <Navbar></Navbar>
    <RouterProvider router={router} />
   
  </StyledApp>
  
}

export default App
