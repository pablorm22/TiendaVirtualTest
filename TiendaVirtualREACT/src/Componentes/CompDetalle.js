import React, { Component } from 'react'
import ProductoService from "../Servicios/ProductoService";

class CompDetalle extends Component {
    constructor(props) {
        super(props)
        //this.getProducto = this.getProducto.bind(this);

        this.state = {
            actualProducto: {
                id: null,
                nombre: "",
                presentacion: "",
                descripcion: "",
                talla: "",
                precio: 0
            },
            message: ""
        };
    }

    async componentDidMount() {
        this.getProducto(this.props.id);
    }

    getProducto(id) {
        ProductoService.getProductoPorId(id)
            .then(response => {
                this.setState({
                    actualProducto: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { actualProducto } = this.state;
        const imgRuta = "../imagenes/" + actualProducto.id + ".jpg";

        return <div className="container">
            <a className="btn btn-primary btn-circle" href="/items"><i className="glyphicon glyphicon-arrow-left"></i></a>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{actualProducto.nombre}</h3>
                    <h6 className="card-subtitle">Talla: {actualProducto.talla}</h6>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center"><img src={imgRuta} className="img-responsive" /></div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h4 className="box-title mt-5">Descripcion</h4>
                            <p>{actualProducto.presentacion}</p>
                            <h6 className="card-subtitle">${actualProducto.precio}</h6>
                            <a href="#" className="btn btn-primary" id="check_out_cart">
                                <span className="glyphicon glyphicon-shopping-cart"></span>Comprar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CompDetalle;