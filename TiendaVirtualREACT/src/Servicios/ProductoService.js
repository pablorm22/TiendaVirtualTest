import http from "../http-common";

class ProductoService {
    getProductos() {
        return http.get("/producto");
    }

    getProductoPorId(id) {
        return http.get(`/producto/${id}`);
    }

    getProductoPorNombre(nombre) {
        return http.get(`/producto?nombre=${nombre}`);
    }
}

export default new ProductoService();