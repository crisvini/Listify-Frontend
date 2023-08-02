import Navbar from "../components/Navbar"
import AnotacoesCard from "../components/AnotacoesCard"
import AnotacoesMockada from "../components/AnotacoesMockada"

const AnotacoesPage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <h1>Anotações</h1>
                            <div className="d-flex justify-content-end align-items-center">
                                <input type="email" className="w-100 form-control" id="buscar" placeholder="Buscar" />
                                <a className="ms-3 pointer"><i className="bi bi-funnel fs-2"></i></a>
                                <a className="ms-3 pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                            </div>
                        </div>
                        <div>
                            {AnotacoesMockada.length > 0 ?
                                (AnotacoesMockada.map((value, key) => (
                                    <AnotacoesCard key={key} id={value.id} nome={value.nome} anotacao={value.anotacao} compartilhada={value.compartilhada} tags={value.tags} />
                                )))
                                :
                                (<span className="fw-lighter">Nenhuma anotação encontrada</span>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AnotacoesPage