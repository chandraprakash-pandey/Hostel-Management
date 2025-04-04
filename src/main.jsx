import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Signup from './Components/Signup/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = 'Services' element={<Services/>}/>
      <Route path = 'About' element={<About/>}/>
      <Route path = 'Gallery' element={<Gallery/>}/>
      <Route path = 'Contact' element={<Contact/>}/>
      <Route path = 'Signup' element={<Signup/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
