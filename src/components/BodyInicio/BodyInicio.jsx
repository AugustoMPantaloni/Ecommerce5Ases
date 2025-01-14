import "./BodyInicio.css"
import ImagenOferta from "../../assets/Ofertas.png"

const BodyInicio = () =>{
    return (
        <>
        <div className="estilosContenedorP">
            <p>ENVIOS GRATIS EN COMPRAS SUPERIORES A $20.000</p>
        </div>
        <div className="estilosContenedorImagen">
            <img  src={ImagenOferta} alt="Oferta"/>
        </div>
        <div className="estilosContenedorPromociones">
            <div className="estilosPromocionesP">
                <p>PROMOCIONES BANCARIAS DE LA SEMANA</p>
            </div>
            <div className="estilosLogosBancos">
                <img alt="Falta agregar logos de los bancos"/>
            </div>
        </div>
        </>
    )
}

export default BodyInicio;