import { Link } from "react-router-dom"

const ListasAtalhos = ({ to, texto, redirect }) => {
    if (redirect) {
        return (
            <>
                <Link to={to}><li>•&nbsp;&nbsp;&nbsp;{texto}</li></Link>
            </>
        )
    }
    return (
        <>
            <a className="pointer"><li>•&nbsp;&nbsp;&nbsp;{texto}</li></a>
        </>
    )
}

export default ListasAtalhos