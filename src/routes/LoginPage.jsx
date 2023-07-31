import { Link } from 'react-router-dom'
import BackButtonNav from '../components/BackButtonNav'
import LogoLogin from '../components/LogoLogin'

const LoginPage = () => {
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
                                    <h5 className='fw-bold'>Entrar</h5>
                                </div>
                                <form>
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input type="email" className="w-100 form-control" id="email" />
                                    <label htmlFor="password" className="form-label mt-1">Senha</label>
                                    <input type="password" className="w-100 form-control" id="password" />
                                    <input type="submit" value='Entrar' className="btn btn-orange w-100 mt-4" />
                                </form>
                                <div className="mt-2 d-flex justify-content-between">
                                    <Link to='/cadastrar'>Novo usuário? cadastrar</Link>
                                    <Link to='/recuperacao-senha'>Esqueci minha senha</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage