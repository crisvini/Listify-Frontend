import { Link } from 'react-router-dom'

const BackButtonNav = ({ url }) => {
    return (
        <div className='back-position'>
            <Link to={url}><i className="bi bi-arrow-left-short"></i>Voltar</Link>
        </div>
    )
}

export default BackButtonNav