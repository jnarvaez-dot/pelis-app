import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom";
import { Peliculas } from "./components/Peliculas.jsx"
import DetallePeliculas from "./components/DetallePeliculas.jsx"
import './index.css'


const router = createBrowserRouter([
    {
        path: "/peliculas",
        Component: Peliculas,
    },
    {
        path: "/peliculas/:id",
        Component: DetallePeliculas,
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
