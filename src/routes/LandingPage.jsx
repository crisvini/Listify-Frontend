import { useNavigate } from "react-router-dom"
import Logo from '../assets/logos/Horizontal.png'
import LogoSquare from '../assets/logos/ListifySquare.png'

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <header className="py-2 py-lg-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <img src={Logo} alt="Listify" className="logo-navbar" />
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-end mt-2 mt-lg-0">
                            <button type="button" className="btn btn-outline-grey me-2" onClick={() => navigate('/login')}>Login</button>
                            <button type="button" className="btn btn-orange" onClick={() => navigate('/cadastrar')}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container-xxl mt-1 mt-lg-3">
                <div className="row">
                    <div className="col-12 col-lg-6 align-self-center my-5 mt-lg-1 mb-lg-0">
                        <h1>Listas e Anotações Simplificadas.</h1>
                        <p>Organização descomplicada - Teste o Listify gratuitamente e experimente o poder das listas e anotações simplificadas.</p>
                        <button type="button" className="btn btn-lg btn-orange w-100-custom" onClick={() => navigate('/cadastrar')}>Cadastrar gratuitamente</button>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={LogoSquare} alt="Listify" className="w-100" />
                    </div>
                </div>
                <div className="row mt-lg-5 g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="bg-orange p-2 lh-1 rounded-2 d-inline-flex align-items-center justify-content-center fs-4 me-3">
                            <i className="bi bi-journal-bookmark"></i>
                        </div>
                        <div>
                            <h3 className="fs-2">Organização intuitiva</h3>
                            <p>Crie tags para categorizar suas listas e anotações de forma mais simples.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="bg-orange p-2 lh-1 rounded-2 d-inline-flex align-items-center justify-content-center fs-4 me-3">
                            <i className="bi bi-cloud-arrow-up"></i>
                        </div>
                        <div>
                            <h3 className="fs-2">Sincronização em tempo real</h3>
                            <p>Acesse suas listas e anotações em todos os dispositivos, de onde estiver.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="bg-orange p-2 lh-1 rounded-2 d-inline-flex align-items-center justify-content-center fs-4 me-3">
                            <i className="bi bi-palette"></i>
                        </div>
                        <div>
                            <h3 className="fs-2">Personalização completa</h3>
                            <p>Personalize sua anotação como você quiser, com cores, tamanhos e fontes.</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mt-1 mt-lg-3 bg-secondary-custom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col text-center">
                            <span>&copy; 2023 Listify. Todos os direitos reservados.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage