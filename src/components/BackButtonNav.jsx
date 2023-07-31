import { Link, useNavigate } from 'react-router-dom'

const BackButtonNav = ({ url }) => {
    const navigate = useNavigate()
    const redirect = url ? url : -1

    const handleBack = () => {
        navigate(redirect)
    }

    return (
        <div className='back-position'>
            <Link onClick={handleBack} ><i className="bi bi-arrow-left-short"></i>Voltar</Link>
        </div>
    )
}

export default BackButtonNav