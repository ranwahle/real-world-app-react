import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { Styled } from './App.styled'
import { Navbar } from './components/vavbar/navbar'
import { Home } from './pages/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);


function App() {
  return <Styled.App>
    <Navbar></Navbar>
    <RouterProvider router={router} />
   
  </Styled.App>
  
}

export default App
