import { Link } from "react-router-dom"
import App from './public/App.css'
function Header() {
    return (
        <>
    
            <nav className="navbar navbar-expand-lg bg-primary text-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Market Foro
                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carrito">
                                    Carrito
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nosotros">
                                    Nosotros
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Ubicacion">
                                  Ubicacion
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-green" >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header