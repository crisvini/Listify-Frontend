import Navbar from "../components/Navbar"
import ListasCard from "../components/ListasCard"
import ListasMockada from "../components/ListasMockada"
import ListasCardCompartilhado from "../components/ListasCardCompartilhado"
import NovaTag from "../components/NovaTag"

const ListasPage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl mb-5">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-between align-items-end">
                        <h1>Listas</h1>
                        <NovaTag />
                    </div>
                    <div className="col-12 col-lg-6 border-lg-end">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <h2 className="text-secondary-custom">Criadas por mim</h2>
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                        </div>
                        <div className="scrollable-container">
                            {ListasMockada.length > 0 ?
                                (ListasMockada.map((value, key) => (
                                    <ListasCard key={key} id={value.id} nome={value.nome} descricao={value.descricao} dataEntrega={value.dataEntrega} compartilhada={value.compartilhada} tarefas={value.tarefas} tags={value.tags} />
                                )))
                                :
                                (<span className="fw-lighter">Nenhuma lista encontrada</span>)
                            }
                        </div>
                    </div>
                    <div className="container d-lg-none">
                        <hr className="my-4 text-primary-custom" />
                    </div>
                    <div className="col-12 col-lg-6 border-lg-start mt-lg-0">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <h2 className="text-secondary-custom">Compartilhadas comigo</h2>
                        </div>
                        <div className="scrollable-container">
                            {ListasMockada.length > 0 ?
                                (ListasMockada.map((value, key) => (
                                    <ListasCardCompartilhado key={key} id={value.id} nome={value.nome} descricao={value.descricao} dataEntrega={value.dataEntrega} compartilhada={value.compartilhada} tarefas={value.tarefas} tags={value.tags} />
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