import Navbar from "../components/Navbar"
import AnotacoesCard from "../components/AnotacoesCard"
import AnotacoesMockada from "../components/AnotacoesMockada"
import AnotacoesCardCompartilhado from "../components/AnotacoesCardCompartilhado"

const AnotacoesPage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl mb-5">
                <div className="row">
                    <div className="col-12">
                        <h1>Anotações</h1>
                    </div>
                    <div className="col-12 col-lg-6 border-lg-end">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <h2 className="text-secondary-custom">Criadas por mim</h2>
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                        </div>
                        <div className="scrollable-container">
                            {AnotacoesMockada.length > 0 ?
                                (AnotacoesMockada.map((value, key) => (
                                    <AnotacoesCard key={key} id={value.id} nome={value.nome} anotacao={value.anotacao} compartilhada={value.compartilhada} tags={value.tags} />
                                )))
                                :
                                (<span className="fw-lighter">Nenhuma anotação encontrada</span>)
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
                            {AnotacoesMockada.length > 0 ?
                                (AnotacoesMockada.map((value, key) => (
                                    <AnotacoesCardCompartilhado key={key} id={value.id} nome={value.nome} anotacao={value.anotacao} compartilhada={value.compartilhada} tags={value.tags} />
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