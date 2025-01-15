import "./ItemListCards.css" //Usamos el mismo css que para ItemListCards
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetallesCards = () => {
    const [productos, setProductos] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        fetch("/Productos.json") //¿se puede usar el fetch en un context?
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => console.error("Error al cargar los productos:", error));
    }, [])

    const detalles = productos.filter(producto => producto.id === parseInt(id))
    
    return (
        <div className="estilosItemList">
            {detalles.map(producto => (
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

export default DetallesCards;