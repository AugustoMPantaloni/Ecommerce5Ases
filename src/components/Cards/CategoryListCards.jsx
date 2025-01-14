// componente que filtra los productos para la barra de navegacion segun la categoria

import "./ItemListCards.css" //Usamos el mismo css que para ItemListCards
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryListCards = () =>{
    const {categoria} = useParams();
    const [productos, setProductos] = useState ([]);

    useEffect(() => {
        fetch("/Productos.json") //¿se puede usar el fetch en un context?
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => alert("Error al cargar los productos...", error.message)) //Cambiar el alert por un mensaje en la interfaz
    }, [])

    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

    return (
        <div className="estilosItemList">
            {productosFiltrados.map(producto => (
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

export default CategoryListCards;