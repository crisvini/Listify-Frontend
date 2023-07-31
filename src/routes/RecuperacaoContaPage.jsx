import { Link } from 'react-router-dom'
import Logo from '../assets/logos/Horizontal.png'
import BackButtonNav from '../components/BackButtonNav'

const RecuperacaoContaPage = () => {
    return (
        <div className="div-circle">
            <div className="mid-circle">
                <BackButtonNav />
                <div className="card-position">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 col-lg-4 mx-auto p-0 p-lg-4 py-lg-5 rounded-5">
                                <div className="logo-login mb-3">
                                    <img src={Logo} alt="Listify" className="logo-login" />
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
        </div>
    )
}

export default RecuperacaoContaPage