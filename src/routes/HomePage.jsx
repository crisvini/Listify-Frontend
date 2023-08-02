import Navbar from "../components/Navbar"

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
                                    <button className="btn btn-lg btn-outline-orange p-3 w-100">
                                        <span>Nova lista&nbsp;<i className="bi bi-plus-circle"></i></span>
                                    </button>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <button className="btn btn-lg btn-outline-orange p-3 w-100">
                                        <span>Nova anotação&nbsp;<i className="bi bi-plus-circle"></i></span>
                                    </button>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <button className="btn btn-lg btn-outline-orange p-3 w-100">
                                        <span>Nova tag&nbsp;<i className="bi bi-bookmark-plus"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage