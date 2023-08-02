import FormLista from "../components/FormLista"
import Navbar from "../components/Navbar"

const NovaListaPage = () => {
    return (
        <>
            <Navbar />
            <main className="container-xxl mb-5">
                <div className="row mb-5">
                    <h1>Nova lista</h1>
                </div>
                <FormLista />
            </main>
        </>
    )
}

export default NovaListaPage