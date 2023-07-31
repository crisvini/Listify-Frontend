import Logo from '../assets/logos/Horizontal.png'
import { Link } from 'react-router-dom'
import BackButtonNav from '../components/BackButtonNav'

const CadastrarPage = () => {
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
                                    <label htmlFor="nome" className="form-label">Primeiro nome</label>
                                    <input type="text" className="w-100 form-control" id="nome" />
                                    <label htmlFor="sobrenome" className="form-label mt-1">Sobrenome</label>
                                    <input type="text" className="w-100 form-control" id="sobrenome" />
                                    <label htmlFor="email" className="form-label mt-1">E-mail</label>
                                    <input type="email" className="w-100 form-control" id="email" />
                                    <label htmlFor="password" className="form-label mt-1">Senha</label>
                                    <input type="password" className="w-100 form-control" id="password" />
                                    <input type="submit" value='Cadastrar' className="btn btn-orange w-100 mt-4" />
                                </form>
                                <div className="mt-2">
                                    <Link to='/login'>Já tem uma conta? entrar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastrarPage