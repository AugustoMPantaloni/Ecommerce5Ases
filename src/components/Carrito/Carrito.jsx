import "./Carrito.css";

const Carrito = () => {

    return(
        <div className="contenedorCarrito">
            <div className="contenedorProductosCarrito">
                <p> Productos en el carrito </p>
                <div>
                </div>
            </div>
            
            <div className="contenedorResumenCarrito">
                <p> Resumen de compra </p>
                <div className="detallesCompra">
                    <p> Productos: $ </p>
                    <p> Envio: $ </p>
                    <div className="contenedorTotal">
                        <p> Total: $ </p>
                    </div>
                </div>
                <button> Continuar compra </button> 
            </div>
        </div>
    )
}

export default Carrito;