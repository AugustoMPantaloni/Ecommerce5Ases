/* componente que filtra los productos que estan en oferta
Creo que se podria haber simplificado este filtrado junto con algun otro componente de Cards pero no supe como*/

import "./ItemListCards.css" //Usamos el mismo css que para ItemListCards
import Cards from "./Cards";
import { useEffect, useState } from "react";


const NuevosListCards = () => {
    const [productos, setProductos] = useState ([]);

    useEffect(() => {
        fetch("/Productos.json") //¿se puede usar el fetch en un context?
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => alert("Error al cargar los productos...", error.message)) //Cambiar el alert por un mensaje en la interfaz.
    }, [])

    const productosNuevos = productos.filter(producto => producto.nuevoIngreso === true);

    return (
        <div className="estilosItemList">
            {productosNuevos.map(producto => (
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
    )
}

export default NuevosListCards;