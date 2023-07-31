import BackButtonNav from '../components/BackButtonNav'
import LogoLogin from '../components/LogoLogin'

const ConfirmacaoEmailPage = () => {
    return (
        <div className="div-circle">
            <div className="mid-circle">
                <BackButtonNav />
                <div className="card-position">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 col-lg-4 mx-auto p-0 p-lg-4 py-lg-5 rounded-5">
                                <LogoLogin />
                                <div className='mb-2'>
                                    <h5 className='fw-bold'>Insira o código de recuperação enviado ao seu e-mail</h5>
                                </div>
                                <form>
                                    <label htmlFor="codigo" className="form-label">Código de recuperação</label>
                                    <input type="text" className="w-100 form-control" id="codigo" />
                                    <input type="submit" value='Confirmar' className="btn btn-orange w-100 mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmacaoEmailPage