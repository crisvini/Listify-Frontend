import { Link } from "react-router-dom"

const ListasAtalhos = ({ to, texto }) => {
    return (
        <>
            <Link to={to}><li>•&nbsp;&nbsp;&nbsp;{texto}</li></Link>
        </>
    )
}

export default ListasAtalhos