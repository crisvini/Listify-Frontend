import { useNavigate } from "react-router-dom"
import Logo from '../assets/logos/Horizontal.png'

const Home = () => {
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
                            <button type="button" className="btn btn-orange" onClick={() => navigate('/cadastrar')}>Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home