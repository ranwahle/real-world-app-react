import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { Styled } from './App.styled'
import { Header } from './components/vavbar/navbar'
import { Home } from './pages/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);


function App() {
  return <Styled.App>
    <Header></Header>
    <RouterProvider router={router} />
   
  </Styled.App>
  
}

export default App
