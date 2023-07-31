import BackButtonNav from '../components/BackButtonNav'
import LogoLogin from '../components/LogoLogin'

const RecuperacaoContaPage = () => {
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
                                    <h5 className='fw-bold'>Recuperação de conta</h5>
                                </div>
                                <form>
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input type="email" className="w-100 form-control" id="email" />
                                    <input type="submit" value='Enviar' className="btn btn-orange w-100 mt-4" />
                                    <div className="alert alert-orange mt-3" role="alert">Um e-mail com um código de confirmação será enviado</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RecuperacaoContaPage