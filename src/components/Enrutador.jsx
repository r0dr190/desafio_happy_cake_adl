import { Route, Routes } from "react-router-dom"
/* import { NavBar } from "./NavBar"
 */import { Home } from "../views/Home"
import { Contacto } from "../views/Contacto"

export const Enrutador = () => {

    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contacto" element={<Contacto />} />
            </Routes>
        </div>
        
    )
}