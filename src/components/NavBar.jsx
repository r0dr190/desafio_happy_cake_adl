import { Link } from "react-router-dom"

export const NavBar = () => {

    return(
        <nav className="navbar bg-dark">
            <div className="container-fluid ">
                <span className="navbar-brand mb-0 h1 text-white">Navbar</span>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                    Home
                </Link>
                <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
                    Contacto
                </Link>
            </div>
        </nav>
    )
}