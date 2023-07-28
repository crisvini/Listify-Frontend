import { Button } from "bootstrap"
import Logo from '../assets/logos/Horizontal.png'

const Login = () => {
    return (
        <div className="div-circle">
            <div className="mid-circle">
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
                                    <a href="">Novo usuário? cadastrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container">
        //     <div className="row mb-5">
        //         <div className="col-4">
        //             <h1 className="bg-primary">Background</h1>
        //         </div>
        //     </div>
        //     <div className="row mb-5">
        //         <div className="col-4">
        //             <h2 className="text-primary">Texto</h2>
        //         </div>
        //     </div>
        //     <div className="row mb-5">
        //         <div className="col-4">
        //             <a className="link-primary" href="#">Link</a>
        //         </div>
        //     </div>
        //     <div className="row mb-5">
        //         <div className="col-4">
        //             <button className="btn btn-primary">Login</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Login