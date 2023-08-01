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
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
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