// componente que muestra los productos en el inicio divididos por nuevos ingresos y productos destacados

import "./ItemListCards.css"
import Cards from "./Cards";
import { useEffect, useState } from "react";

// Funcion para mostrar los productos ya filtrados
function muestraProductos(filtro) {
    return (
        <div className="estilosItemList">
            {filtro.map(producto => (
                <Cards
                    key={producto.id}
                    imagen={producto.imagen}
                    alt={producto.alt}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    categoria={producto.categoria}
                    marca={producto.marca}
                />
            ))}
        </div>
    );
}

const ItemListCards = () => {
    const [productos, setProductos] = useState ([]);

    useEffect(() => {
        fetch("/Productos.json") //¿se puede usar el fetch en un context?
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => alert("Error al cargar los productos...", error.message)) //Cambiar el alert por un mensaje en la interfaz.
    }, [])

    const productosNuevos = productos.filter(producto => producto.nuevoIngreso === true);
    const productosDestacados = productos.filter(producto => producto.productoDestacado === true);

    return (
        <>
            <div className="estilosCategorias">
                <p>Nuevos ingresos</p>
            </div>
            {muestraProductos(productosNuevos)}
            <div className="estilosCategorias">
                <p>Productos destacados</p>
            </div>
            {muestraProductos(productosDestacados)}
        </>
    )
}

export default ItemListCards;