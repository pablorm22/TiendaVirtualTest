import React, { Component } from 'react'
import ProductoService from "../Servicios/ProductoService";

class CompResultado extends Component {
  constructor(props) {
    super(props);

    this.onChangeBuscarNombre = this.onChangeBuscarNombre.bind(this);
    this.buscarNombre = this.buscarNombre.bind(this);

    this.state = {
      productos: [],
      buscarNombre: ""
    };
  }

  onChangeBuscarNombre(e) {
    const nombre = e.target.value;
    this.setState({
      buscarNombre: nombre
    });
  }

  buscarNombre() {
    ProductoService.getProductoPorNombre(this.state.buscarNombre.toUpperCase())
      .then(response => {
        this.setState({
          productos: response.data
        }); 
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { productos, buscarNombre } = this.state;

    return 
    <div className="container">
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
              <div className="row p-2 bg-white border rounded"><a href={"/items/"+producto.id}>Ver Detalle</a></div>
            </div>
          ))}

        </div>
      </div>

    </div>

  }
}

export default CompResultado;