import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import AnotacoesCard from "../components/AnotacoesCard"
import ListasCard from "../components/ListasCard"
import AnotacoesMockada from "../components/AnotacoesMockada"
import ListasMockada from "../components/ListasMockada"
import AnotacoesCardCompartilhado from "../components/AnotacoesCardCompartilhado"
import ListasCardCompartilhado from "../components/ListasCardCompartilhado"

const CompartilhamentoPage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h1>Anotações</h1>
                    </div>
                    <div className="col-12 col-lg-6 border-lg-end">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <Link to='/anotacoes'><h2>Criadas por mim <i className="bi bi-arrow-return-right fs-6"></i></h2></Link>
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
                <div className="row d-lg-none">
                    <div className="container">
                        <hr className="my-4 text-primary-custom" />
                    </div>
                </div>
                <div className="row mt-lg-5 mb-5">
                    <div className="col-12">
                        <h1>Listas</h1>
                    </div>
                    <div className="col-12 col-lg-6 border-lg-end">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <Link to='/listas'><h1>Criadas por mim <i className="bi bi-arrow-return-right fs-6"></i></h1></Link>
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
                            <Link to='/listas'><h1>Compartilhadas comigo</h1></Link>
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
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

export default CompartilhamentoPage