import BackButtonNav from '../components/BackButtonNav'
import LogoLogin from '../components/LogoLogin'

const NovaSenhaPage = () => {
    return (
        <main className="div-circle">
            <div className="mid-circle">
                <BackButtonNav />
                <div className="card-position">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 col-lg-4 mx-auto p-0 p-lg-4 py-lg-5 rounded-5">
                                <LogoLogin />
                                <div className='mb-2'>
                                    <h5 className='fw-bold'>Insira uma nova senha</h5>
                                </div>
                                <form>
                                    <label htmlFor="senha1" className="form-label">Nova senha</label>
                                    <input type="password" className="w-100 form-control" id="senha1" />
                                    <label htmlFor="senha2" className="form-label mt-1">Confirme sua nova senha</label>
                                    <input type="password" className="w-100 form-control" id="senha2" />
                                    <input type="submit" value='Confirmar' className="btn btn-orange w-100 mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NovaSenhaPage