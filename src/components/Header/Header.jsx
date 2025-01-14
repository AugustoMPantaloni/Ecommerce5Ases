import "./Header.css"
import IconoLupa from "../../assets/iconolupa.png"
import IconoUsuario from "../../assets/iconousario.png"
import IconoCarrito from "../../assets/iconocarrito.png"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () =>{
    return (
        <>
        <div className="estilosHeader">
            <div>
                <nav>
                <Link to="/"> <img className="estilosLogo" src={Logo}/> </Link>
                </nav>
            </div>
            <form className="estilosBarraBusqueda">
                <input type="text" placeholder="Buscar..." />
                <button className="estilosBotonBusqueda" type="submit"><img src={IconoLupa} alt="lupa"/> </button>
            </form>
            <div>
                <button className="estilosBotonUsuario"> <img src={IconoUsuario} alt="icono1"/> </button>
                <button className="estilosBotonCarrito"> <img src={IconoCarrito} alt="icono2"/> </button>
            </div>
        </div>
        </>
    )
}

export default Header 