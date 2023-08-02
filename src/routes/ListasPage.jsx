import Navbar from "../components/Navbar"
import ListasCard from "../components/ListasCard"
import ListasMockada from "../components/ListasMockada"

const ListasPage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <h1>Listas</h1>
                            <div className="d-flex justify-content-end align-items-center">
                                <input type="email" className="w-100 form-control" id="buscar" placeholder="Buscar" />
                                <a className="ms-3 pointer"><i className="bi bi-funnel fs-2"></i></a>
                                <a className="ms-3 pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                            </div>
                        </div>
                        <div>
                            {ListasMockada.length > 0 ?
                                (ListasMockada.map((value, key) => (
                                    <ListasCard key={key} id={value.id} nome={value.nome} descricao={value.descricao} dataEntrega={value.dataEntrega} compartilhada={value.compartilhada} tarefas={value.tarefas} tags={value.tags} />
                                )))
                                :
                                (<span className="fw-lighter">Nenhuma lista encontrada</span>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ListasPage