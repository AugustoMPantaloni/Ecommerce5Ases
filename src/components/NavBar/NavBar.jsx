import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="estilosContenedorNavBar">
            <nav>
                <Link className="estilosBoton" to="/nuevosIngresos"> Nuevos ingresos </Link>
                <Link  to="/categoria/Bazar"> Bazar </Link>
                <Link to="/categoria/Blanco"> Blanco </Link>
                <Link to="/categoria/Tecnologia"> Tecnologia </Link>
                <Link to="/categoria/Ferreteria"> Ferreteria </Link>
                <Link className="estilosBoton" to="/ofertas"> Ofertas </Link>
            </nav>
        </div>
    )
}

export default NavBar;