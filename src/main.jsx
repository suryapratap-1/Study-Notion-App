import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, AboutUs, ContactUs, Login, SignUp, DashBoard} from './pages/index.js'
import {Android, Java, HTML, JavaScript} from './components/Courses/index.js'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='contact' element={<ContactUs />} />
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='android' element={<Android />} />
            <Route path='java' element={<Java />} />
            <Route path='html' element={<HTML />} />
            <Route path='javascript' element={<JavaScript />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
