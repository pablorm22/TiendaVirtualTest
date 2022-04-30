const CompBusqueda = () => {
    return <nav className="navbar navbar-dark bg-primary">
        <form action="/items" method="get">
            <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Buscar un producto"
                    className="form-control"
                    name="search"
                />
            </div>
            <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                <button type="submit" className="btn btn-secondary">Buscar</button>
            </div>
        </form>
    </nav>
}

export default CompBusqueda;