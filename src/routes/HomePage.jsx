import Navbar from "../components/Navbar"
import ListasAtalhos from "../components/ListasAtalhos"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="w-100 mt-2 bg-secondary-custom p-3 rounded-3">
                            <div className="w-100 d-flex justify-content-between align-items-center">
                                <h1>Atalhos</h1>
                            </div>
                            <ul className="mb-0 without-dots">
                                <ListasAtalhos to='/anotacoes' texto='Anotações' />
                                <ListasAtalhos to='/listas' texto='Listas' />
                                <ListasAtalhos to='/configuracoes' texto='Configurações' />
                            </ul>
                        </div >
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage