import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import CompDetalle from "./CompDetalle";
import ProductoService from "../Servicios/ProductoService";
import CompBusqueda from "./CompBusqueda";

const PageProducto = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search');
    const [productos, setProductos] = useState([]);
 
    useEffect(() => {
        if(query){
        const lsProductos = () => {
            ProductoService.getProductoPorNombre(query.toUpperCase()).then(function (response) {
                setProductos(response.data)
            });
        }
        lsProductos();
    }       
    }, [])
    

    return (
        <Router>
            <CompBusqueda />
            <div>
                <main role="main" className="container">
                    <Routes>
                        
                        <Route path="/items/:id" element={<Detalle />} />
                    </Routes>
                </main>
            </div>

             <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    {productos.map((producto, index) => (
                        <div className="col-md-10">
                            <div className="row p-2 bg-white border rounded">

                                <div className="col-md-9 mt-1">
                                    <h4 className="mr-1">{producto.nombre}</h4>
                                    <div className="mt-1 mb-1 spec-1">
                                        <span>Talla: {producto.talla} - ${producto.precio}</span>
                                    </div>
                                </div>

                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={"../imagenes/" + producto.id + ".jpg"} /></div>
                            </div>
                            <div className="row p-2 bg-white border rounded">{producto.presentacion}</div>
                            <div className="row p-2 bg-white border rounded"><a href={"/items/" + producto.id}>Ver Detalle</a></div>
                        </div>
                    ))}
                </div>
            </div>

        </Router>

    );

}

export default PageProducto;

function Detalle() {
    const { id } = useParams();

    return <div className="container">

        <div className="row">
            <CompDetalle id={id} />
        </div>

    </div>
}