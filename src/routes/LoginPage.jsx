import Logo from '../assets/logos/Horizontal.png'
import { Link } from 'react-router-dom'
import BackButtonNav from '../components/BackButtonNav'

const LoginPage = () => {
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
                                    <label htmlFor="password" className="form-label mt-1">Senha</label>
                                    <input type="password" className="w-100 form-control" id="password" />
                                    <input type="submit" value='Entrar' className="btn btn-orange w-100 mt-4" />
                                </form>
                                <div className="mt-2">
                                    <Link to='/cadastrar'>Novo usuário? cadastrar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage