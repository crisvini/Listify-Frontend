import Navbar from "../components/Navbar"
import ListasAtalhos from "../components/ListasAtalhos"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl">
                <div className="row">
                    <div className="col-">
                        <h1>Atalhos</h1>
                        <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                            <div className="row g-3">
                                <div className="col-12 col-lg-4">
                                    <button className="btn btn-lg btn-orange p-3 w-100">
                                        <span>Nova anotação&nbsp;<i className="bi bi-plus-circle"></i></span>
                                    </button>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <button className="btn btn-lg btn-orange p-3 w-100">
                                        <span>Nova lista&nbsp;<i className="bi bi-plus-circle"></i></span>
                                    </button>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <button className="btn btn-lg btn-orange p-3 w-100">
                                        <span>Nova tag&nbsp;<i className="bi bi-bookmark-plus"></i></span>
                                    </button>
                                </div>
                            </div>
                            {/* <ul className="mb-0 without-dots">
                                <ListasAtalhos to='/anotacoes' texto='Anotações' redirect={true} />
                                <ListasAtalhos to='/listas' texto='Listas' redirect={true} />
                                <ListasAtalhos to='/configuracoes' texto='Configurações' redirect={true} />
                                <ListasAtalhos to='/configuracoes' texto='Nova anotação' redirect={false} />
                                <ListasAtalhos to='/configuracoes' texto='Nova lista' redirect={false} />
                                <ListasAtalhos to='/configuracoes' texto='Nova tag' redirect={false} />
                            </ul> */}
                        </div >
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage