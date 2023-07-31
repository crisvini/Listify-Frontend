import Logo from '../assets/logos/Horizontal.png'
import { useNavigate } from 'react-router-dom'

const LogoLogin = () => {
    const navigate = useNavigate()

    return (
        <div className="logo-login mb-3">
            <img src={Logo} onClick={() => navigate('/')} alt="Listify" className="logo-login pointer" />
        </div>
    )
}

export default LogoLogin