import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import Avaliacoes from "../pages/Avaliacoes";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/service", element: <Service />},
    {path: "/contato", element: <Contato />},
    {path: "/sobre", element: <Sobre />},
    {path: "/avaliacoes", element: <Avaliacoes />}
])

export default router;