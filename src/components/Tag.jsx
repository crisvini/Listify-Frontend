const Tag = ({ key, corTexto, corBg, nome }) => {
    return (
        <>
            <span key={key} className="badge me-2" style={{ color: corTexto, backgroundColor: corBg }}>{nome}</span>
        </>
    )
}

export default Tag